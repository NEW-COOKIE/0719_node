// 引入express包
const express = require('express');
// 引入db模块连接数据库
const db = require('./db/db');
// 引入用户规则模块
const userModel = require('./model/userModel');

// 创建app应用服务
let app = express();
// 隐藏x-poweref-by
app.disable('x-poweref-by');
// 设置中间件获取post参数
app.use(express.urlencoded({ extended: true }));
// 设置中间件向外暴露静态页面
app.use(express.static(__dirname + '/public'));
db(function (err) {
  if (!err) {
    // 设置重定向
    app.get('/', (request, response) => {
      response.redirect('/login');
    })

    // 静态login UI页面
    app.get('/login', (request, response) => {
      response.sendFile(__dirname + '/public/login.html');
    })

    // 静态register UI页面
    app.get('/register', (request, response) => {
      response.sendFile(__dirname + '/public/register.html');
    })

    // 接收用户注册信息
    app.post('/register', (request, response) => {
      // 获取post传入参数
      let { email, nick_name, password, re_password } = request.body;

      // 设置正则判断
      const emailRule = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{4,10}.com$/;
      const nickNameRule = /^[\u4e00-\u9fa5]/gm;
      const passwordRule = /^[a-zA-Z0-9_-]{3,16}$/;

      if (!emailRule.test(email)) {
        response.send('邮箱格式不正确');
      } else if (!nickNameRule.test(nick_name)) {
        response.send('昵称格式不正确');
      } else if (!passwordRule.test(password)) {
        response.send('密码格式不正确');
      } else if (password !== re_password) {
        response.send('密码不一致');
      } else {
        userModel.findOne({ email }, (err, data) => {
          if (data) {
            response.send('邮箱已被注册');
          } else {
            userModel.create({ email, nick_name, password }, (err, data) => {
              if (err) {
                response.send('注册失败');
              } else {
                response.send('注册成功');
              }
            })
          }
        })
      }
    })
  }

  // 监听服务器状态
  app.listen(3000, function (err) {
    if (err) console.log(err);
    else console.log('服务器已开启');
  })
});
