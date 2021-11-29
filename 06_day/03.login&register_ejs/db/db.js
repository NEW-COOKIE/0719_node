/* 
数据库连接
 */
// 引入mongoose包
const mongoose = require('mongoose');
// 设置数据库参数
const IP = 'localhost';
const PORT = '27017';
const DB_NAME = 'test';
// 连接数据库
mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`);

function db(callback) {
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log('数据库已连接');
      callback();
    }
  })
}

// 暴露函数
module.exports = db;
