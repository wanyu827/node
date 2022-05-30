const express = require('express')
const app = express()
// 定义中间件
// next ->把当前中间件的控制权交给下一个人
function mw(req, res, next) {
  console.log(Date.now())
  next()
}
app.use(mw)
app.get('/a', (req, res) => {
  res.send('访问a')
})
app.get('/b', (req, res) => {
  res.send('访问b')
})
app.listen(3006, () => {
  console.log('服务器开启成功')
})
