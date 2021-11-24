/* 
连接数据库模块
 */
const mongoose = require('mongoose');
// 引入自定义连接数据模块
let db = require('./db/db');
// 引入自定义学生规则模块
let studentsModule = require('./modules/studentsModule');
// 引入自定义老师规则模块
let teachersModule = require('./modules/teachersModule');

db(function (err) {
  if (!err) {
    teachersModule.create({
      stu_id: '001',
      name: '小瑞',
      age: 30,
      sex: '女',
      hobby: ['学习', '性感', '摸鱼'], //限制爱好只能为数组 数组中的每一项必须为字符串
      info: 'nice'
    }, (err, data) => {
      if (err) {
        console.log('写入失败', err);
      } else {
        console.log('写入成功', data);
      }
    })
  }
});
