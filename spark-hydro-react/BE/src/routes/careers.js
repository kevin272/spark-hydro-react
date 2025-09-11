const express = require('express');
const router = express.Router();
const Career = require('../models/Career');
const { authenticateToken, requirePermission } = require('../middlewares/auth');
const { sendResponse, sendError } = require('../utils/response');

// Get all career openings
router.get('/', async (req, res) => {
  try {
    const { department, type, level, active } = req.query;
    const filter = {};
    
    if (department) filter.department = department;
    if (type) filter.type = type;
    if (level) filter.level = level;
    if (active !== 'false') filter.isActive = true;
    
    const careers = await Career.find(filter).sort({ createdAt: -1 });
    sendResponse(res, careers, 'Career openings retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching career openings', error.message);
  }
});

// Get career opening by ID
router.get('/:id', async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return sendError(res, 404, 'Career opening not found');
    }
    sendResponse(res, career, 'Career opening retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching career opening', error.message);
  }
});

// Get active career openings
router.get('/active/list', async (req, res) => {
  try {
    const careers = await Career.find({ isActive: true })
      .select('title department location type level createdAt')
      .sort({ createdAt: -1 });
      
    sendResponse(res, careers, 'Active career openings retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching active career openings', error.message);
  }
});

// Get careers by department
router.get('/department/:dept', async (req, res) => {
  try {
    const { dept } = req.params;
    const careers = await Career.find({ 
      department: dept, 
      isActive: true 
    }).sort({ createdAt: -1 });
    
    sendResponse(res, careers, `${dept} career openings retrieved successfully`);
  } catch (error) {
    sendError(res, 500, 'Error fetching department career openings', error.message);
  }
});

// Create new career opening (admin endpoint)
router.post('/', authenticateToken, requirePermission('manage-careers'), async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    sendResponse(res, career, 'Career opening created successfully', 201);
  } catch (error) {
    sendError(res, 400, 'Error creating career opening', error.message);
  }
});

// Update career opening (admin endpoint)
router.put('/:id', authenticateToken, requirePermission('manage-careers'), async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!career) {
      return sendError(res, 404, 'Career opening not found');
    }
    
    sendResponse(res, career, 'Career opening updated successfully');
  } catch (error) {
    sendError(res, 400, 'Error updating career opening', error.message);
  }
});

// Delete career opening (admin endpoint)
router.delete('/:id', authenticateToken, requirePermission('manage-careers'), async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);
    if (!career) {
      return sendError(res, 404, 'Career opening not found');
    }
    sendResponse(res, null, 'Career opening deleted successfully');
  } catch (error) {
    sendError(res, 500, 'Error deleting career opening', error.message);
  }
});

module.exports = router;