const fs = require('fs')
fs.readFile('./file/成绩.txt', 'utf-8', (err, data) => {
  if (err) return console.log('读取失败' + err.message)
  const res = data.replace(/ /g, '\n').replace(/=/g, ':')
  fs.writeFile('./file/成绩_ok.txt', res, (err) => {
    if (err) return console.log('写入失败' + err.message)
    console.log('写入成功')
  })
})