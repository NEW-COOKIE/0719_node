
// 引入express搭建服务器
const express = require('express');
const db = require('./db/db');
const registerModel = require('./models/registerModel');

// 创建app应用对象
let app = express();
// 禁止服务器返回x-pwoered-by 为了安全
app.disable('x-pwoered-by');

// 设置中间件引入静态页面
app.use(express.static(__dirname + '/public'));
// 设置中间件获取post参数
app.use(express.urlencoded({ extended: true }));

db((err) => {
  if (!err)
    // 默认路由
    app.get('/', (request, response) => {
      response.send('ok');
    })

  // 登录路由页面
  app.get('/login', (request, response) => {
    response.sendFile(__dirname + '/public/login.html');

  })
  // 注册路由页面
  app.get('/register', (request, response) => {
    response.sendFile(__dirname + '/public/register.html');

  })

  // 登录跳转路由
  app.post('/login', (request, response) => {
    let { email, password } = request.body
    console.log(email, password)

    response.send('登录跳转页面');
  })
  // 注册跳转页面
  app.post('/register', (request, response) => {
    // 获取用户注册信息
    let { email, password, nick_name, re_password } = request.body;

    // 正则表达式
    // 邮箱验证
    const emailReg = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}\.com$/;
    // 昵称验证
    const nickNameReg = /^[\u4e00-\u9fa5]/gm;
    //密码验证
    const passwordReg = /^[a-zA-Z0-9_-]{4,16}$/

    if (!emailReg.test(email)) {
      response.send('邮箱不正确');
    } else if (!nickNameReg.test(nick_name)) {
      response.send('昵称不正确');
    } else if (!passwordReg.test(password)) {
      response.send('密码不正确');
    } else if (password !== re_password) {
      response.send('密码不一致');
    }else {
      registerModel.findOne({email}, function(err, data) {
        if (data) {
          response.send('邮箱被注册');
        }else {
          registerModel.create({email, nick_name, password}, function(err, data) {
            if (err) {
              console.log('写入失败');
            }else {
              response.send('注册成功');
            }
          })
        }
      })
    }
  })

  // 监听服务器状态
  app.listen(3000, function (err) {
    if (err) console.log(err);
    else console.log('服务器启动成功');
  })
})
