const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');
const { authenticateToken, requirePermission } = require('../middlewares/auth');
const { sendResponse, sendError } = require('../utils/response');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const contactMessage = new ContactMessage({
      ...req.body,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });
    
    await contactMessage.save();
    
    // In production, you might want to:
    // - Send an email notification to admin
    // - Send a confirmation email to the user
    // - Integrate with CRM systems
    
    sendResponse(res, 
      { id: contactMessage._id }, 
      'Thank you for your message. We will get back to you soon!', 
      201
    );
  } catch (error) {
    sendError(res, 400, 'Error submitting contact form', error.message);
  }
});

// Get all messages (admin endpoint)
router.get('/', authenticateToken, requirePermission('manage-contacts'), async (req, res) => {
  try {
    const { status, type, priority } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (type) filter.type = type;
    if (priority) filter.priority = priority;
    
    const messages = await ContactMessage.find(filter)
      .sort({ createdAt: -1 })
      .select('-ip -userAgent'); // Hide sensitive data in list view
      
    sendResponse(res, messages, 'Contact messages retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching contact messages', error.message);
  }
});

// Get message by ID (admin endpoint)
router.get('/:id', authenticateToken, requirePermission('manage-contacts'), async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) {
      return sendError(res, 404, 'Message not found');
    }
    sendResponse(res, message, 'Contact message retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching contact message', error.message);
  }
});

// Update message status (admin endpoint)
router.patch('/:id/status', authenticateToken, requirePermission('manage-contacts'), async (req, res) => {
  try {
    const { status, repliedBy } = req.body;
    const updateData = { status };
    
    if (status === 'replied') {
      updateData.repliedAt = new Date();
      if (repliedBy) updateData.repliedBy = repliedBy;
    }
    
    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!message) {
      return sendError(res, 404, 'Message not found');
    }
    
    sendResponse(res, message, 'Message status updated successfully');
  } catch (error) {
    sendError(res, 400, 'Error updating message status', error.message);
  }
});

// Get message statistics (admin endpoint)
router.get('/stats/summary', authenticateToken, requirePermission('manage-contacts'), async (req, res) => {
  try {
    const stats = await ContactMessage.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const totalMessages = await ContactMessage.countDocuments();
    const recentMessages = await ContactMessage.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    });
    
    sendResponse(res, {
      total: totalMessages,
      recent: recentMessages,
      byStatus: stats
    }, 'Contact message statistics retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching contact message statistics', error.message);
  }
});

// Delete message (admin endpoint)
router.delete('/:id', authenticateToken, requirePermission('manage-contacts'), async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!message) {
      return sendError(res, 404, 'Message not found');
    }
    sendResponse(res, null, 'Contact message deleted successfully');
  } catch (error) {
    sendError(res, 500, 'Error deleting contact message', error.message);
  }
});

module.exports = router;