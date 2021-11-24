
// 这种写法已被淘汰 性能较差
let buf0 = new Buffer(10);
console.log(buf0);

// 性能较好 工作中使用比较多 开辟的是新的空间
let buf1 = Buffer.alloc(10);
console.log(buf1);

// 性能最好 工作中不适用 会有数据残留
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

let buf3 = Buffer.from('atgigu');
console.log(buf3);
