const fs = require('fs')
// fs.writeFile(要写入的文件路径(如果没有文件node会自动创建),要写入的数据,回调函数(err)写入成功err=null否则err就是错误对象)
fs.writeFile('./file/2.txt', '222', (err) => {
  if (err) return console.log('写入失败' + err.message)
  console.log('写入成功')
})