/* 
fs.createReadStream(path[, options]);
  --path: 文件路径+文件名+后缀
  --options: 配置对象
    --highwatermark 设置每次文件读取大小 默认:64*1024
 */

const { createReadStream, createWriteStream } = require("fs");


let rs = createReadStream(__dirname + '/demo.txt');
let ws = createWriteStream('../haha.txt');

// 监视流状态
rs.on('open', () => {
  console.log('读取文件流打开');
})
rs.on('close', () => {
  console.log('读取文件流关闭');
  // 关闭写入流
  ws.close();
})

ws.on('open', () => {
  console.log('写入流文件开启');
})
ws.on('close', () => {
  console.log('写入流文件关闭');
})

rs.on('data', function (data) {
  console.log(data);

  // 流式写入文件
  ws.write(data);

  // ws.close(); // 在此处关闭可写流只会写入一次文件
})

// ws.close(); // 在此处关闭可写流文件还没写入就关闭了


/* 
小文件可以使用简单文件读写,大文件需要用流式文件读写
 */
