/* 
login&register业务逻辑
 */
// 设置路由器
const { Router } = require('express');

// 实例路由器
let router = new Router();

const path = require('path');

// 引入用户模型规则
let userModel = require(path.resolve(__dirname, '../model/userModel'));

// 接收用户注册信息
router.post('/register', (request, response) => {
  // 获取post传入参数
  let { email, nick_name, password, re_password } = request.body;

  // 设置正则判断规则
  const emailRule = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}.com$/;
  const nickNameRule = /^[\u4e00-\u9fa5]/gm;
  const passwordRule = /^[a-zA-Z0-9_-]{3,16}$/;

  // 存储错误对象
  let errMsg = {};

  // 判断正则
  if (!emailRule.test(email)) {
    errMsg.emailErr = '邮箱格式不正确';
  }
  if (!nickNameRule.test(nick_name)) {
    errMsg.nicknameErr = '昵称格式不正确';
  }
  if (!passwordRule.test(password)) {
    errMsg.passwordErr = '密码格式不正确';
  }
  if (password !== re_password) {
    errMsg.repasswordErr = '密码不一致';
  }

  // 判断错误对象是否为空
  if (JSON.stringify(errMsg) !== '{}') {
    response.render('register', { errMsg });
    return;
  }
  // 数据库查询
  userModel.findOne({ email }, (err, data) => {
    if (data) {
      errMsg.emailErr = `${email}该邮箱已被注册`;
      response.render('register', { errMsg });
    } else {
      userModel.create({ email, nick_name, password }, (err, data) => {
        if (err) {
          errMsg.notworkErr = '注册失败 请重试';
          response.redirect('register', { errMsg })
        } else {
          console.log(`${email}注册成功`);
          response.redirect('/login');
        }
      })
    }
  })

})

// 登录
router.post('/login', (request, response) => {
  let { email, password } = request.body;

  // 设置正则判断
  const emailRule = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{4,10}.com$/;
  const passwordRule = /^[a-zA-Z0-9_-]{3,16}$/;

  // 收集错误对象
  let errMsg = {};

  if (!emailRule.test(email)) {
    errMsg.emailErr = '邮箱格式不正确';
  }
  if (!passwordRule.test(password)) {
    errMsg.password = '密码格式不正确';
  }

  if (Object.keys(errMsg).length !== 0) {
    response.render('login', { errMsg });
    return;
  }

  userModel.findOne({ email, password }, (err, data) => {
    if (err) {
      errMsg.notworkErr = '连接失败 请重试';
      response.render('login', { errMsg });
      console.log(err);
      return;
    }
    if (data) {
      response.redirect('https://www.baidu.com');
      console.log('登录成功' + email);
      return;
    }

    errMsg.loginErr = '用户名或密码错误';
    response.render('login', {errMsg});

  })

})

module.exports = function () {
  return router;
}
