// 导入fs模块
const fs = require('fs')
// 使用readFile读取指定的文件
// fs.readFile(读取的文件路径，编码格式，回调函数（错误对象，数据）)
fs.readFile('./file/1.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err.message)
  console.log(data)
})