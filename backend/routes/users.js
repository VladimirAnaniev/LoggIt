const express = require('express')
const authCheck = require('../auth/middleware/auth-check')
const User = require('../data/User')
// const Validator = require('../utilities/validator')

const router = new express.Router()
const pageSize = 10

router.post('/profile', authCheck, (req, res) => {
  const user = req.user
  const updated = req.body

  // TODO: validate form

  user.name = updated.name
  if (updated.age) user.age = updated.age
  if (updated.location) user.location = updated.location

  user.save()
    .then(updated => {
      res.json({
        success: true,
        message: 'Profile updated successfully',
        updated
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      })
    })
})

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

router.get('/all', authCheck, (req, res) => {
  const user = req.user
  const page = parseInt(req.query.page) || 1

  if (user.roles.indexOf('Admin') < 0) {
    return res.json({
      success: false,
      message: 'Only admins allowed!'
    })
  }

  User.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(users => {
      res.json({
        success: true,
        users
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      })
    })
})

router.post('/:id/admin', authCheck, (req, res) => {
  const user = req.user
  const id = req.params.id
  const shouldBeAdmin = req.body.newState

  if (user.roles.indexOf('Admin') < 0) {
    return res.json({
      success: false,
      message: 'Only admins allowed!'
    })
  }

  User.findById(id, {})
    .then(user => {
      if (shouldBeAdmin) {
        user.roles.push('Admin')
        user.save()
      } else {
        user.roles.splice(user.roles.indexOf('Admin'), 1)
        user.save()
      }

      res.json({
        success: true,
        message: 'User roles modified successfully.',
        user
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      })
    })
})

router.post('/:id/block', authCheck, (req, res) => {
  const user = req.user
  const id = req.params.id
  const shouldBeBlocked = req.body.newState

  if (user.roles.indexOf('Admin') < 0) {
    return res.json({
      success: false,
      message: 'Only admins allowed!'
    })
  }

  User.findById(id, {})
    .then(user => {
      user.isBlocked = shouldBeBlocked
      user.save()

      res.json({
        success: true,
        message: 'User roles modified successfully.',
        user
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
