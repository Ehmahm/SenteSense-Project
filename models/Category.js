const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  color: {
    type: String,
    default: '#000000'
  },
  icon: {
    type: String,
    default: 'default-icon'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
