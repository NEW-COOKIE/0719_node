// 引入express包 搭建服务器
const express = require('express');

// 创建app应用服务
let app = express();
// 设置模板引擎
app.set('view engine', 'ejs')
// 配置模板引擎参数
app.set('views', './views');

// 设置路由
app.get('/', (request, response) => {
  response.render('index', { data: 'holle' });
})

// 绑定服务器监听
app.listen(3000, function (err) {
  if (!err) console.log('服务器已启动');
  else console.log(err);
})
