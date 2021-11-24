/* 

 */
// 引入的mongoose包
const mongoose = require('mongoose');

// 定义数据库连接参数
const IP = 'localhost';
const PORT = '27017';
const DB_NAME = 'test';
// 连接数据库
mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`);
// 绑定数据库监听事件
mongoose.connection.on('open', (err, data) => {
  if (err) console.log('数据库连接失败', err);
  else console.log('数据库连接成功');

  // 获取模式
  let Schema = mongoose.Schema;

  // 设置模式
  let studentsRule = new Schema({
    stu_id: {
      type: String, // 类型
      required: true, // 重复
      unique: true // 唯一
    },
    name: {
      type: String
    }
  })

  let studentsModel = mongoose.model('newstudents1', studentsRule);

})
