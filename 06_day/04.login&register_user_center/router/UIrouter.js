/* 
UI展示路由
 */
// 设置路由器
const { Router } = require("express");
// 引入路径库
const path = require('path');

// 实例路由器
let router = new Router();

// 设置重定向
router.get('/', (request, response) => {
  response.redirect('/login');
})

// 静态login UI页面
router.get('/login', (request, response) => {
  console.log(request.query)
  let { email } = request.query;

  response.render('login', { errMsg: { email } });
})

// 静态register UI页面
router.get('/register', (request, response) => {
  response.render('register', { errMsg: {} });
})

// 静态register UI页面
router.get('/usercenter', (request, response) => {
  console.log(request.query);
  let { nickname } = request.query;
  response.render('usercenter', { nickname });
})

module.exports = function () {
  return router;
}
