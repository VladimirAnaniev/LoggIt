import { combineReducers } from 'redux'

import auth from './authReducer'
import feedback from './feedbackReducer'
import workouts from './workoutsReducer'
import users from './usersReducer'
import admin from './adminReducer'

const reducers = combineReducers({auth, feedback, workouts, users, admin})

export default reducers

