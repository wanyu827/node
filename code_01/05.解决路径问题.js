// 导入fs和path模块
const fs = require('fs')
const path = require('path')
// 拼接绝对路径path.join(__dirname,要读取的文件相对于js文件的相对路径)，解决在不同地方执行时的路径问题
fs.readFile(path.join(__dirname, './file/1.txt'), 'utf-8', (err, data) => {
  if (err) return console.log('读取失败' + err.message)
  console.log(data)
})