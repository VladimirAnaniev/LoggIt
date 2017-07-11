const mongoose = require('mongoose')

const REQUIRED = '{PATH} is required!'

let exerciseSchema = new mongoose.Schema({
  name: {type: String, required: REQUIRED},
  sets: {type: Number, required: REQUIRED},
  reps: {type: Number, required: REQUIRED},
  weight: {type: Number, required: REQUIRED}
})

let Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
