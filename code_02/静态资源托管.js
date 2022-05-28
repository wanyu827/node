const http = require('http')
const server = http.createServer()
const path = require('path')
const fs = require('fs')

server.on('request', (req, res) => {
  fs.readFile(path.join(__dirname,'public', req.url), (err, data) => {
    if (err) return res.end('404 not found')
    res.end(data)
  })
})

server.listen(8000, () => {
  console.log('服务器开启成功')
})
