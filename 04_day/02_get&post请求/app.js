/* 
 搭建服务器
 */
const http = require('http');

let params;
let server = http.createServer(function(request, response) {
  params = new URLSearchParams(request.url.split('?')[1]);
  let name = params.get('name');
  let password = params.get('password');

  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end(`<h1>我叫${name},今年${password}</h1>`);
});

server.listen(3000, function(err) {
  if (err) console.log(err);
  else console.log('服务器启动成功');
})
