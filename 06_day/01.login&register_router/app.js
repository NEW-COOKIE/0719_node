// 引入express包
const express = require('express');
// 引入db模块连接数据库
const db = require('./db/db');

// 创建app应用服务
let app = express();
// 隐藏x-poweref-by
app.disable('x-poweref-by');
// 设置中间件获取post参数
app.use(express.urlencoded({ extended: true }));
// 设置中间件向外暴露静态页面
app.use(express.static(__dirname + '/public'));

// 引入UI路由
const UIrouter = require('./router/UIrouter');

// 引入登录,注册逻辑路由
const loginregisterRouter = require('./router/loginregisterrouter');

db(function (err) {
  if (!err) {
    // UI 路由器中间件
    app.use(UIrouter());
    // login&register 路由器中间件
    app.use(loginregisterRouter());

  }

  // 监听服务器状态
  app.listen(3000, function (err) {
    if (err) console.log(err);
    else console.log('服务器已开启');
  })
});
