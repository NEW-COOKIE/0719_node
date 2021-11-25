
const express = require('express');
// const bodyParse = require('body-parser');

let app = express();

// 1. 应用级中间件(方式一)
/* app.use((request, response, next) => {

  // 图片防盗链
  if (request.get('Referer')) {
    let miniReferer = request.get('Referer').split('/')[2];
    if (miniReferer === 'localhost:5500') {
      next();
    } else {
      response.sendFile(__dirname + '/public/err.jpg');
    }
  } else {
    next();
  }

}) */

// 1. 全局中间件(方式二)
function guardPic(request, response, next) {
  // 图片防盗链
  if (request.get('Referer')) {
    let miniReferer = request.get('Referer').split('/')[2];
    if (miniReferer === 'localhost:5500') {
      next();
    } else {
      response.sendFile(__dirname + '/public/err.jpg');
    }
  } else {
    next();
  }
}

// 2. 处理post请求参数中间件
// express自带的中间件和body-parse是一样的写法
// app.use(bodyParse.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));

// 3. 处理静态页面中间件
app.use(express.static(__dirname+'/public'));

app.get('/', (request, response) => {
  response.send('ok1');
})
app.get('/demo', guardPic, (request, response) => {
  response.sendFile(__dirname + '/public/1.jpg');
})
app.post('/demo', (request, response) => {
  console.log(request.body);
  response.send('ok');
})
// app.get('/a', (request, response) => {
//   response.sendFile(__dirname+'/public/a.html');
// })

app.listen(3000, function (err) {
  if (err) console.log(err);
  else console.log('ok');
})

