const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
  if (err) return console.log(err.message)
  const regStyle = /<style>([\s\S]*)<\/style>/
  const regScript = /<script>([\s\S]*)<\/script>/
  const arrCss = regStyle.exec(data)
  const arrJs = regScript.exec(data)
  writeFn(path.join(__dirname, './clock/index.css'), arrCss[1])
  writeFn(path.join(__dirname, './clock/index.js'), arrJs[1])
  const newData = data.replace(arrCss[0], '<link rel="stylesheet" href="./index.css">').replace(arrJs[0], '<script src="./index.js"></script>')
  writeFn(path.join(__dirname, './clock/index.html'), newData)

})
/**
 * 
 * @param {要写入的文件路径} src 
 * @param {要写入的数据} str 
 */
function writeFn(src, str) {
  fs.writeFile(src, str, (err) => {
    if (err) return console.log(err.message)
    console.log('写入成功')
  })
}