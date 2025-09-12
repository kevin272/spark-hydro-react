const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    maxlength: 2000
  },
  type: {
    type: String,
    enum: ['general', 'quote', 'support', 'partnership', 'career'],
    default: 'general'
  },
  budget: {
    type: String,
    enum: ['<$5k', '$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k+', 'not-specified'],
    default: 'not-specified'
  },
  timeline: {
    type: String,
    enum: ['asap', '1-month', '2-3-months', '3-6-months', 'flexible'],
    default: 'flexible'
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'advertisement', 'other'],
    default: 'website'
  },
  ip: String,
  userAgent: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  repliedAt: Date,
  repliedBy: String
});

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);