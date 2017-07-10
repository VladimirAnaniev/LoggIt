const authRoutes = require('../routes/auth')
const workoutRoutes = require('../routes/workout')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/workout', workoutRoutes)
}
