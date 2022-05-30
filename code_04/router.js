const express = require('express')
const router = express.Router()
router.get('/user/list', (req, res) => {
  res.send('用户列表')
})
router.get('/user/details', (req, res) => {
  res.send('用户详情')
})
router.get('/article', (req, res) => {
  res.send('文章列表')
})
router.get('/article/details', (req, res) => {
  res.send('文章详情')
})
module.exports = router
