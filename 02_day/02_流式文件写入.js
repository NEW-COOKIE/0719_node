/* 
创建可写流
fs.createWriteStream(path[, options])
  --path: 要写入的文件路径+文件名+后缀
  --options: 可选参数
    --flags: 文件追加
    --encoding: 万国码 默认: UTF-8
    --fd: 文件统一标识
    --mode: 文件的操作权限
    --autoClose: 自动关闭 --> 文件 默认值: true
    --emitClose: 强制关闭 --> 文件 默认值: true
    --start: 读取文件的起始位置
 */
// 引入文件系统模块
let fs = require('fs');

let sw = fs.createWriteStream(__dirname + '/demo.txt');

// 使用了流式写入文件 必须要检测流的状态
sw.on('open', () => {
  console.log('开启写入流');
})
sw.on('close', () => {
  console.log('关闭写入流');
})

// 写入文件
sw.write('写入文件');
sw.close();
  // sw.end() //在node -v8版本中要使用end关闭;
