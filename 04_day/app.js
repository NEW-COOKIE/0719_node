// 连接数据库
/* const mongoose = require('mongoose');

const IP = 'localshot';
const PORT = '27017';
const DB_NAME = 'test';

mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`);

mongoose.connection.on('open', function(err) {
  if (err) console.log(err);
  else console.log('数据库连接成功');

  let Schema = mongoose.Schema;

  let studentsRule = new Schema({
    stu_id: {
      type: String
    },
    age: {
      type: Number
    }
  });

  let stuModel = mongoose.model('students', studentsRule);

  stuModel.create({
    
  })
}) */


// 原生http包搭建服务器
/* const http = require('http');

let server = http.createServer(function(request, response) {

  response.setHeader('content-type', 'text/html; charset=utf-8');
  response.end('中文');
});

server.listen(3000, function(err) {
  if (err) console.log(err);
  else console.log('服务器搭建成功');
}) */


// 使用express搭建服务器
const express = require('express');

let app = express();

app.get('/', function(request, response) {
  response.send('编写中文');
});

app.listen(3000, function(err) {
  if (err) console.log(err);
  else console.log('服务器已开启') ;
})
