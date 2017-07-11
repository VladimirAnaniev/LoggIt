const express = require('express')
const authCheck = require('../auth/middleware/auth-check')
const User = require('../data/User')
// const Validator = require('../utilities/validator')

const router = new express.Router()

router.get('/profile', authCheck, (req, res) => {
  const user = req.user

  res.json({
    success: true,
    user
  })
})

router.get('/usersCount', (req, res) => {
  User
    .find({})
    .count()
    .then(count => {
      res.json({
        success: true,
        count
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      })
    })
})

module.exports = router
