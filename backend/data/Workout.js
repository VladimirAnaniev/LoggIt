const mongoose = require('mongoose')

const REQUIRED = '{PATH} is required!'
const ObjectId = mongoose.Schema.Types.ObjectId

let workoutSchema = new mongoose.Schema({
  name: {type: String, required: REQUIRED},
  date: {type: Date, default: Date.now},
  exercises: [{type: ObjectId, ref: 'Exercise'}]
})

let Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
