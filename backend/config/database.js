const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const User = require('../data/User')
require('../data/Workout')
require('../data/Exercise')

module.exports = (settings) => {
  mongoose.connect(settings.db, {
    useMongoClient: true
  })
    .then(() => {
      console.log('Connected to MongoDB.')

      User.seedAdminUser()
    })
    .catch(err => {
      console.log(err)
    })
}
