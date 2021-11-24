// 引入模块
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');

  // let Schema = mongoose.Schema;

  // const studentRule = new Schema({
  //   stu_id: {
  //     type: String,
  //     required: true, //限制学号必填项
  //     unique: true //限制学号唯一
  //   },
  //   name: {
  //     type: String, //限制学号必填项
  //     required: true
  //   },
  //   age: {
  //     type: Number,
  //     required: true, //限制学号必填项
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  //   hobby: [String], //限制爱好只能为数组 数组中的每一项必须为字符串
  //   info: Schema.Types.Mixed,
  //   date: {
  //     type: Date,
  //     default: Date.now()
  //   },
  //   enable_flag: {
  //     type: String,
  //     default: 'Y'
  //   }
  // });

  // const stuModel = mongoose.model('newstudents', studentRule);

  // const silence = new stuModel({
  //   stu_id: '002',
  //   name: '琴',
  //   age: 16,
  //   sex: '女',
  //   hobby: ['吃饭', '睡觉', '摸鱼'], //限制爱好只能为数组 数组中的每一项必须为字符串
  //   info: 666
  // });

  // stuModel.create(silence, (err, data) => {
  //   if (err) {
  //     console.log('失败', err);
  //   }else {
  //     console.log('成功', data);
  //   }
  // })
}

main().catch((err) => {
  if (err) {
    console.log('失败', err);
  }else {
    console.log('成功');
  }
});

