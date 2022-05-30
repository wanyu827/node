// const express = require('express')

// const app = express()
// app.get('/', (req, res) => {
//   res.send('hello')
// })

// app.listen(3000, () => {
//   console.log('开启服务器成功')
// })

const express = require('express')
const app = express()

app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
  const data = req.query
  console.log(data)
  res.send(data)
})

app.get('/:id/:name', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})
app.listen(3000, () => {
  console.log('服务器成功')
})
