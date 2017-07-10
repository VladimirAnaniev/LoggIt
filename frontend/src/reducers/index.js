import { combineReducers } from 'redux'

import auth from './authReducer'
import feedback from './feedbackReducer'

const reducers = combineReducers({auth, feedback})

export default reducers

