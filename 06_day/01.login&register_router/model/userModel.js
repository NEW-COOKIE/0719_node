/* 
用户字段模块
 */
// 引入mongoose包
const mongoose = require('mongoose');

let Schema = mongoose.Schema;
// 设置用户规则
let userRule = new Schema({
  email: {
    type: String,
    required: true,
  },
  nick_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('userinfo', userRule);
