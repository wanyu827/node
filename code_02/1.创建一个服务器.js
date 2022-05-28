// 导入内置的http模块
const http = require('http')

// 创建服务器实例
const server = http.createServer()

// 给服务器绑定request事件 当客户端连接时触发
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('这是黄海杰的服务器')
})

server.listen(8270, () => {
  console.log('服务器启动成功')
})
