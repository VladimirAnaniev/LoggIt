const express = require('express')
const authCheck = require('../auth/middleware/auth-check')
const Workout = require('../data/Workout')
const Exercise = require('../data/Exercise')

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

// router.post('/create', authCheck, (req, res) => {
//   const pet = req.body
//
//   const validationResult = validatePetForm(pet)
//   if (!validationResult.success) {
//     return res.status(200).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     })
//   }
//
//   petsData.save(pet)
//
//   res.status(200).json({
//     success: true,
//     message: 'Pet added successfuly.',
//     pet
//   })
// })
//
// router.get('/all', (req, res) => {
//   const page = parseInt(req.query.page) || 1
//
//   const pets = petsData.all(page)
//
//   res.status(200).json(pets)
// })
//
// router.get('/details/:id', authCheck, (req, res) => {
//   const id = req.params.id
//
//   let pet = petsData.findById(id)
//
//   if (!pet) {
//     return res.status(200).json({
//       success: false,
//       message: 'Pet does not exists!'
//     })
//   }
//
//   let response = {
//     id,
//     name: pet.name,
//     image: pet.image,
//     age: pet.age,
//     type: pet.type,
//     createdOn: pet.createdOn
//   }
//
//   if (pet.breed) {
//     response.breed = pet.breed
//   }
//
//   res.status(200).json(response)
// })
//
// router.post('/details/:id/comments/create', authCheck, (req, res) => {
//   const id = req.params.id
//   const user = req.user.name
//
//   let pet = petsData.findById(id)
//
//   if (!pet) {
//     return res.status(200).json({
//       success: false,
//       message: 'Pet does not exists!'
//     })
//   }
//
//   const comment = req.body
//
//   if (!comment.message || typeof comment.message !== 'string' || comment.message.length < 10) {
//     return res.status(200).json({
//       success: false,
//       message: 'Comment message must be at least 10 symbols.'
//     })
//   }
//
//   petsData.addComment(id, comment.message, user)
//
//   res.status(200).json({
//     success: true,
//     message: 'Comment added successfuly.',
//     comment: {
//       id,
//       message: comment.message,
//       user
//     }
//   })
// })
//
// router.get('/details/:id/comments', authCheck, (req, res) => {
//   const id = req.params.id
//
//   const pet = petsData.findById(id)
//
//   if (!pet) {
//     return res.status(200).json({
//       success: false,
//       message: 'Pet does not exists!'
//     })
//   }
//
//   const response = petsData.allComments(id)
//
//   res.status(200).json(response)
// })

module.exports = router
