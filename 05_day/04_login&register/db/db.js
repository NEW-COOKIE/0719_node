/* 
该模块用于连接数据库
 */
// 引入mongoose
const mongoose = require('mongoose');
// 设置数据库参数
const IP = 'localhost';
const PORT = '27017';
const DB_NAME = 'test';

// 创建函数向外暴露
function db(callback) {
  // 连接数据库
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`);
  // 绑定数据库监事件
  mongoose.connection.on('open', (err) => {
    if (err) {
      console.log(err);
      callback(err);
    }else {
      console.log('数据库连接成功');
      callback();
    }
  })
}

// 向外暴露
module.exports = db;
