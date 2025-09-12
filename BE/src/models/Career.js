const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true,
    enum: ['development', 'design', 'management', 'marketing', 'sales', 'hr']
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship'],
    default: 'full-time'
  },
  level: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'lead', 'manager'],
    default: 'mid'
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: [String],
  requirements: [String],
  niceToHave: [String],
  benefits: [String],
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  applicationDeadline: Date,
  postedBy: {
    type: String,
    default: 'HR Department'
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

CareerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Career', CareerSchema);