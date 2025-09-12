const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { authenticateToken, requirePermission } = require('../middlewares/auth');
const { sendResponse, sendError } = require('../utils/response');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { category, featured, status, public: isPublic } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;
    if (status) filter.status = status;
    if (isPublic !== 'false') filter.isPublic = true;
    
    const projects = await Project.find(filter)
      .populate('team.memberId', 'name position avatar')
      .sort({ featured: -1, createdAt: -1 });
      
    sendResponse(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching projects', error.message);
  }
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('team.memberId', 'name position avatar skills');
      
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    
    sendResponse(res, project, 'Project retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching project', error.message);
  }
});

// Get featured projects
router.get('/featured/list', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true, isPublic: true })
      .select('title shortDescription images category client status')
      .limit(6)
      .sort({ createdAt: -1 });
      
    sendResponse(res, projects, 'Featured projects retrieved successfully');
  } catch (error) {
    sendError(res, 500, 'Error fetching featured projects', error.message);
  }
});

// Create new project (admin endpoint)
router.post('/', authenticateToken, requirePermission('manage-projects'), async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    sendResponse(res, project, 'Project created successfully', 201);
  } catch (error) {
    sendError(res, 400, 'Error creating project', error.message);
  }
});

// Update project (admin endpoint)
router.put('/:id', authenticateToken, requirePermission('manage-projects'), async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    
    sendResponse(res, project, 'Project updated successfully');
  } catch (error) {
    sendError(res, 400, 'Error updating project', error.message);
  }
});

// Delete project (admin endpoint)
router.delete('/:id', authenticateToken, requirePermission('manage-projects'), async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return sendError(res, 404, 'Project not found');
    }
    sendResponse(res, null, 'Project deleted successfully');
  } catch (error) {
    sendError(res, 500, 'Error deleting project', error.message);
  }
});

module.exports = router;