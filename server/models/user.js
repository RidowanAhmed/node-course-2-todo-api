const mongoose = require('mongoose');

let User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minLength: 4,
    trim: true
  }, email: {
    type: String,
    required: true,
    minLength: 10,
    trim: true
  }
});

module.exports = { User };