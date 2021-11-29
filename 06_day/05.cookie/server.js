
const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
app.use(cookieParser());

app.get('/demo', (request, resposne) => {
  resposne.send('没有设置cookie');
})

app.get('/demo1', (request, resposne) => {

  let parent = {
    name: 'qwe',
    age: 14
  }

  resposne.cookie('penset', parent);
  resposne.send('设置了会话cookie');
})

app.get('/demo2', (request, resposne) => {
  let parent = {
    naem: 'abc',
    age: 165
  }
  resposne.cookie('parent', parent, {maxAge: 1000*60*60});
  resposne.send('设置了永久cookie');
})

app.get('/demo3', (request, response) => {
  let {parent} = request.cookies;
  console.log(parent);
})

app.get('/demo4', (request, response) => {
  // response.cookie('parent', '', {maxAge: 0});
  response.clearCookie('parent');
  response.send('删除parent cookie');
})

app.listen(3000, function(err) {
  if (err) console.log(err);
  else console.log('ok');
})
