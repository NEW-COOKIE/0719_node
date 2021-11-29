/* 
login&register业务逻辑
 */
// 设置路由器
const { Router } = require('express');

// 实例路由器
let router = new Router();

// 引入用户模型规则
let userModel = require('../model/userModel');

// 接收用户注册信息
router.post('/register', (request, response) => {
  // 获取post传入参数
  let { email, nick_name, password, re_password } = request.body;

  // 设置正则判断规则
  const emailRule = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{2,10}.com$/;
  const nickNameRule = /^[\u4e00-\u9fa5]/gm;
  const passwordRule = /^[a-zA-Z0-9_-]{3,16}$/;

  // 判断正则
  if (!emailRule.test(email)) {
    response.send('邮箱格式不正确');
  } else if (!nickNameRule.test(nick_name)) {
    response.send('昵称格式不正确');
  } else if (!passwordRule.test(password)) {
    response.send('密码格式不正确');
  } else if (password !== re_password) {
    response.send('密码不一致');
  } else {
    // 数据库查询
    userModel.findOne({ email }, (err, data) => {
      if (data) {
        response.send('邮箱已被注册');
      } else {
        userModel.create({ email, nick_name, password }, (err, data) => {
          if (err) {
            response.send('注册失败');
          } else {
            console.log(`${email}注册成功`);
            response.redirect('/login');
          }
        })
      }
    })
  }
})

// 登录
router.post('/login', (request, response) => {
  let { email, password } = request.body;

  // 设置正则判断
  const emailRule = /^[a-zA-Z0-9]{4,20}@[a-zA-Z0-9]{4,10}.com$/;
  const passwordRule = /^[a-zA-Z0-9_-]{3,16}$/;

  if (!emailRule.test(email)) {
    response.send('邮箱格式不正确');
  } else if (!passwordRule.test(password)) {
    response.send('密码格式不正确');
  } else {
    userModel.findOne({ email, password }, (err, data) => {
      if (err) {
        console.log(err);
        response.send('登录失败');
      } else {
        if (data) {
          response.redirect('https://www.baidu.com');
          console.log('登录成功' + email);
        } else {
          response.send('登录失败');
        }
      }
    })
  }

})

module.exports = function () {
  return router;
}
