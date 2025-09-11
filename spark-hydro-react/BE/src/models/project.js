const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 200
  },
  images: [{
    url: String,
    caption: String,
    isMainImage: {
      type: Boolean,
      default: false
    }
  }],
  technologies: [String],
  category: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'ai/ml', 'blockchain', 'other'],
    default: 'web'
  },
  client: {
    name: String,
    industry: String,
    website: String
  },
  duration: {
    start: Date,
    end: Date,
    estimatedHours: Number
  },
  team: [{
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeamMember'
    },
    role: String
  }],
  links: {
    live: String,
    github: String,
    documentation: String
  },
  status: {
    type: String,
    enum: ['planning', 'in-progress', 'completed', 'on-hold'],
    default: 'completed'
  },
  featured: {
    type: Boolean,
    default: false
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ProjectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Project', ProjectSchema);