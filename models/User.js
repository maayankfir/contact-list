const mongoose = require('mongoose');

const User = {
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    uniqe: true
  },
  password: {
    type: String,
    require: true
  },

  date: {
    type: Date,
    default: Date.now
  }
};

module.exports = mongoose.model('user', User);
