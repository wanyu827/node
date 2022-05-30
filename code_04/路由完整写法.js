const express = require('express')
const app = express()
const userRouter = require('./router/user')
const articleRouter = require('./router/article')

app.use('/user', userRouter)
app.use('/article', articleRouter)
app.listen(8080, () => console.log('服务器开启成功'))
