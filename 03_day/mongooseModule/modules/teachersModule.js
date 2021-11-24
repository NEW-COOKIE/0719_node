/* 
设置学生规则模块
 */

// 引入第三包mongoose
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let teachersRule = new Schema({
  stu_id: {
    type: String, //字段类型
    required: true, //是否必填
    unique: true //是否唯一
  },
  name: {
    type: String, //字段类型
    required: true, //是否必填
  },
  sex: {
    type: String, //字段类型
    required: true, //是否必填
  },
  age: {
    type: Number, //字段类型
    required: true, //是否必填
  },
  hobby: [String],
  info: Schema.Types.Mixed,
  date: {
    type: Date,
    default: Date.now()
  },
  enbale_flag: {
    type: String,
    default: 'Y'
  }
})

// 向外暴露
module.exports = mongoose.model('teachers', teachersRule);
