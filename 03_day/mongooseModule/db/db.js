// 引入第三方模块
const mongoose = require('mongoose');

// 设置连接参数
const IP = 'localhost';
const POST = '27017';
const DB_NAME = 'test';

function db(callback) {
  // 连接数据库
  mongoose.connect(`mongodb://${IP}:${POST}/${DB_NAME}`);
  // 设置数据库监听
  mongoose.connection.on('open', (err) => {
    if (err) {
      console.log('连接失败', err);
      callback(err);
    } else {
      console.log('连接成功');
      callback();
    }
  })
}
// 向外暴露
module.exports = db;