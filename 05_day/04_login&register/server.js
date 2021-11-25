
// 引入express搭建服务器
const express = require('express');

// 创建app服务
let app = express();

// 设置中间件引入静态页面
app.use(express.static(__dirname + '/public'));
// 设置中间件获取post参数
app.use(express.urlencoded({ extended: true }));

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
  let { email, password, nick_name } = request.body;
  console.log(email, nick_name, password);

  response.send('登录跳转页面');
})

// 监听服务器状态
app.listen(3000, function (err) {
  if (err) console.log(err);
  else console.log('服务器启动成功');
})
