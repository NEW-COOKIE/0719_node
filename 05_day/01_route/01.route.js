/* 
request对象中核心的API
  1. request.query;
  2. request.params;
  3. request.body;
  4. request.get('HOST'); 获取请求头


response对象中核心的API
  1. response.send();响应浏览器 不需要添加setHeader()
  2. response.end(); 响应浏览器 需要添加setHeader()
  3. response.download();
  4. response.sendFile();
  5. response.redirece();从定向
  6. response.set();设置响应头 必须要在send,end之前
  7. response.get();获取响应头
  8. response.status();响应状态
 */

const express = require('express');

let app = express();

app.get('/', function(request, response) {

  // let {name, age} = request.query;
  // console.log(name, age);
  // console.log(request.get('HOST'));

  response.download('./publice/1.txt');

  // response.send('我是根路由返回的数据--get');
});

app.post('/', function(request, response) {
  
  console.log(request.body);

  response.send('我是根路由返回的数据--post');
});

app.get('/meishi/:id', function(request, response) {
  let {id} = request.params;
  console.log(id);

  response.send(`我是商家${id}`);
})

app.post('/meishi/:id', function(request, response) {
  let {id} = request.params;
  console.log(id);

  response.sden(`我是商家${id}`);
})

app.listen(3000, function(err) {
  if (err) console.log(err);
  else console.log('ok');
})
