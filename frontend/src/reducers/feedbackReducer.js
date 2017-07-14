import {
  LOADING,
  SUCCESS,
  ERROR
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  success: ''
}

export default function feedbackReducer (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {
        loading: action.newState
      })
    case SUCCESS:
      return Object.assign({}, state, {
        success: action.message
      })
    case ERROR:
      return Object.assign({}, state, {
        error: action.message
      })
    default:
      return state
  }
}
