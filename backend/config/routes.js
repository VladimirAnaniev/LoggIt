const authRoutes = require('../routes/auth')
const workoutRoutes = require('../routes/wokrouts')
const userRoutes = require('../routes/users')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/workout', workoutRoutes)
  app.use('/user', userRoutes)
}
