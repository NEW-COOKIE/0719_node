/* 
异步文件写入 (简单文件写入)
fs.witerFile(file, data[, options], callback)
  --file: 要写入文件的路径+文件名
  --data: 要写入的数据
  --options: 可选参数
    --encoding: 设置文件的编码 默认值:UTF-8(万国码)
    --mode: 设置文件的操作权限
    --flag: 
  --callback: 回调函数
    --err: 错误对象
  node原则: 错误优先
 */

// 引入写文件模块
let fs = require('fs');

fs.writeFile(__dirname + '/text.txt', '你好', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('成功')
  }
})

