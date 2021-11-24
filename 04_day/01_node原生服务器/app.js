/*
使用原生http包搭建服务器
 */

const http = require('http');
// const qs = require('querystring')

let params;
let server = http.createServer(function (request, response) {
  // let params = request.url.split('?')[1];
  // let objParams = qs.parse(params);
  // console.log(objParams);

  params = new URLSearchParams(request.url.split('?')[1]);
  console.log(params);

  response.setHeader('content-type', 'text/html; charset=utf-8');
  response.end('<h1>中文<h1>')
})

server.listen(3000, function (err) {
  if (!err) console.log('服务器已开启')
})
