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
      res.json({
        success: true,
        workouts
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: err.message
      })
    })
})

router.get('/count', authCheck, (req, res) => {
  const user = req.user

  Workout
    .find({user: user})
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
        return res.json({
          success: true,
          message: 'Workout created successfully',
          workout
        })
      })
      .catch(err => {
        return res.status(200).json({
          success: false,
          message: err
        })
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  Workout
    .findById(id)
    .populate('exercises')
    .then(workout => {
      if (!workout) {
        return res.json({
          success: false,
          message: 'No such workout exists.'
        })
      }

      if (workout.user.equals(req.user)) {
        return res.json({
          success: false,
          message: 'You have no access to this workout'
        })
      }

      res.json({
        success: true,
        workout
      })
    })
    .catch(err => {
      res.json({
        success: false,
        message: 'Invalid workout id'
      })
    })
})



module.exports = router
