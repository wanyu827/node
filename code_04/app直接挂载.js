const express = require('express')
const app = express()

app.get('/a', (req, res) => {
  res.send('访问了a')
})
app.get('/b', (req, res) => {
  res.send('访问了b')
})

app.listen(8080, () => console.log('服务器开启成功'))
