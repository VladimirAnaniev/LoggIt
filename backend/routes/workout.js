const express = require('express')
const authCheck = require('../auth/middleware/auth-check')
const Workout = require('../data/Workout')
const Exercise = require('../data/Exercise')
const Validator = require('../utilities/validator')

const router = new express.Router()
const pageSize = 10

router.get('/list', authCheck, (req, res) => {
  const user = req.user
  const page = parseInt(req.query.page) || 1

  Workout
    .find({user: user})
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .then(workouts => {
      res.json(workouts)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

router.get('/count', authCheck, (req, res) => {
  const user = req.user

  Workout
    .find({user: user})
    .count()
    .then(count => {
      res.json(count)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

router.post('/create', authCheck, (req, res) => {
  const user = req.user
  const workout = req.body

  const validationResult = Validator.validateWorkoutForm(workout)
  if (!validationResult.success) {
    return res.status(200).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  const exercises = workout.exercises
  Exercise.collection.insert(exercises, (err, dbExercises) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: err
      })
    }

    let exerciseIds = dbExercises.ops.map(e => e._id)

    Workout.create({name: workout.name, user, exercises: exerciseIds})
      .then(workout => {
        return res.json({success: true, message: 'Workout created successfully', workout})
      })
      .catch(err => {
        return res.status(200).json({
          success: false,
          message: err
        })
      })
  })
})

module.exports = router
