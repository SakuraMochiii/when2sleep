const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleSubject: {
    type: String,
    required: true,
    trim: true,
    index: {
      unique: true,
      sparse: true,
    },
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
