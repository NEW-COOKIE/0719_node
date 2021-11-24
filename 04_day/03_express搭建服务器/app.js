/* 
使用express搭建基本服务器
 */
// 引入第三方框架
const express = require('express');

// 创建app框架服务
let app = express();

// 设置路由服务
app.get('/', (request, response) => {
  console.log(request.query);

  response.send('ok');
})

// 设置服务器端口号 监听服务状态
app.listen(3000,(err) => {
  if (err) console.log(err);
  else console.log('服务器已启动');
});
