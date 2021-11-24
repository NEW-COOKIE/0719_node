/* 
fs.readFile(path[, options], callback);
  --path: 读取文件的路径+文件名+后缀
  --potions: 配置对象
  --callback: 回调函数
    --err: 错误
    --data: 读取出来的数据
 */

// 简单文件的读取和写入 都是一次性把数据写入或者读取到内存中 这样容易造成内存泄露

let fs = require('fs');
// 简单读取文件
fs.readFile(__dirname + '/demo.txt', (err, data) => {
  if (err) {
    console.log('文件读取失败', err);
  }else {
    console.log('文件读取成功', data) ;
  }

  // 简单写入文件
  fs.writeFile('../haha.txt', data, (err) => {
    if (err) {
      console.log(err);
    }else {
      console.log('成功');
    }
  })
})
