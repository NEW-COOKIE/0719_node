
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let registerRule = new Schema({
  email: {
    type: 'String',
    required: true
  },

  nick_name: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});

// 向外暴露
module.exports = mongoose.model('register', registerRule);
