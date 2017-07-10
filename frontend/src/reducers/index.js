import { combineReducers } from 'redux'

import auth from './authReducer'
import feedback from './feedbackReducer'
import workouts from './workoutsReducer'

const reducers = combineReducers({auth, feedback, workouts})

export default reducers

