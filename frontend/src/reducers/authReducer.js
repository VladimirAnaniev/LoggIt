import {
  LOADING,
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  CHANGE_LOGIN_STATE,
} from '../actions/actionTypes'
import Auth from '../utilities/Auth'

const initialState = {
  registerForm: {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  },
  loginForm: {
    email: '',
    password: ''
  },
  isLoggedIn: Auth.isUserAuthenticated()
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {
        loading: action.newState
      })
    case CHANGE_REGISTER_FORM:
      return Object.assign({}, state, {
        registerForm: action.newState
      })
    case CHANGE_LOGIN_FORM:
      return Object.assign({}, state, {
        loginForm: action.newState
      })
    case CHANGE_LOGIN_STATE:
      return Object.assign({}, state, {
        isLoggedIn: action.newState
      })
    default:
      return state
  }
}