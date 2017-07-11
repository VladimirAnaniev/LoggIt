import { combineReducers } from 'redux'

import auth from './authReducer'
import feedback from './feedbackReducer'
import workouts from './workoutsReducer'
import users from './usersReducer'

const reducers = combineReducers({auth, feedback, workouts, users})

export default reducers

