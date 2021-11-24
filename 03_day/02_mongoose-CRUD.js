/* 引入第三方mongoose包 操作mongodb数据库 */
const mongoose = require('mongoose');

// 1. 连接数据库
mongoose.connect('mongodb://localhost:27017/test');

// 2. 绑定数据库连接监听
mongoose.connection.on('open', (err) => {
  if (err) {
    console.log('数据库连接失败', err);
  } else {
    console.log('数据库连接成功');

    //3. 操作数据库
    let Schema = mongoose.Schema;

    // 设置学生规则
    let studentRule = new Schema({
      stu_id: {
        type: String,
        required: true, //限制学号必填项
        unique: true //限制学号唯一
      },
      name: {
        type: String, //限制学号必填项
        required: true
      },
      age: {
        type: Number,
        required: true, //限制学号必填项
      },
      sex: {
        type: String,
        required: true, 
      },
      hobby: [String], //限制爱好只能为数组 数组中的每一项必须为字符串
      info: Schema.Types.Mixed,
      date: {
        type: Date,
        default: Date.now()
      },
      enable_flag: {
        type: String,
        default: 'Y'
      }
    });

    let stuModel = mongoose.model('students', studentRule);

    // 增加
    /* stuModel.create({
      stu_id: '001',
      name: '瑞琴',
      age: 18,
      sex: '女',
      hobby: ['吃饭', '睡觉', '摸鱼'], //限制爱好只能为数组 数组中的每一项必须为字符串
      info: 666
    }, (err, data) => {
      if (err) {
        console.log('写入失败', err);
      }else {
        console.log('写入成功', data);
      }
    }) */

    // find查询 1.返回数组 2.若查询结果为空 返回空数组
    /* stuModel.find({name: '瑞琴'}, (err, data) => {
      if (err) {
        console.log('查询失败', err);
      } else {
        console.log('查询成功', data);
      }
    }) */

    // findOne查询 1.返回结果是一个对象 2.若查询条件不匹配返回null
    /* stuModel.findOne({name: '静静'}, (err, data) => {
      if (err) {
        console.log('查询失败', err);
      } else {
        console.log('查询成功', data);
      }
    }) */


    // updateOne更新一条数据
    /* stuModel.updateOne({name: "瑞琴"}, {age: 16}, (err, data) => {
      if (err) {
        console.log('更新失败', err);
      } else {
        console.log('更新成功', data);
      }
    }) */

    // updateMany更新多条数据
    /* stuModel.updateOne({name: "瑞琴"}, {age: 16}, (err, data) => {
      if (err) {
        console.log('更新失败', err);
      } else {
        console.log('更新成功', data);
      }
    }) */

    // deleteOne删除一条数据
    /* stuModel.updateOne({name: "瑞琴"}, (err, data) => {
      if (err) {
        console.log('删除失败', err);
      } else {
        console.log('删除成功', data);
      }
    }) */

    // deleteMany删除多条数据
    /* stuModel.updateOne({name: "瑞琴"}, (err, data) => {
      if (err) {
        console.log('删除失败', err);
      } else {
        console.log('删除成功', data);
      }
    }) */
    
  }
})




/* const mongoose = require('mongoose');

main().catch((err) => {
  console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
} */
