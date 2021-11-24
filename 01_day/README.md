# NodeJS
## 1.NodeJS任何一个模块(js文件) 都被一个外层函数包裹
functio (exports, require, module, __filename, __dirname){ <br>

}

<br>

## 2.为什么要有这个外层函数(这个外层函数有什么用)

<br>

### 这个外层函数有什么参数
console.log(argument.callee.toString());

<br>

### 如何在函数内部查看函数
function demo() { <br>
  console.log(argument.callee); <br>
} <br>
demo();
