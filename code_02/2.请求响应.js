const { readSync } = require('fs')
const http = require('http')
const { isAbsolute } = require('path')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if (req.url === '/index.html' || req.url === '/') {
    res.end('首页')
  } else if (req.url === '/about.html') {
    res.end('关于')
  } else {
    res.end('404 Not found')
  }
})
server.listen(2000, () => {
  console.log('服务器启动成功')
})
