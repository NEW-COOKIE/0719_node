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
  // 设置绝对路径
  const url = path.resolve(__dirname, '../public/login.html');

  response.sendFile(url);
})

// 静态register UI页面
router.get('/register', (request, response) => {
  // 设置绝对路径
  const url = path.resolve(__dirname, '../public/register.html');

  response.sendFile(url);
})

module.exports = function() {
  return router;
}
