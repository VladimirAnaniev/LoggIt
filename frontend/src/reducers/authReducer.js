import {
  LOADING,
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  CHANGE_LOGIN_STATE,
  RESET_AUTH_FORMS
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
    email: 'admin@admin.com',
    password: 'Admin'
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
    case RESET_AUTH_FORMS:
      return Object.assign({}, state, {
        registerForm: {
          email: '',
          password: '',
          confirmPassword: '',
          name: ''
        },
        loginForm: {
          email: '',
          password: ''
        }
      })
    default:
      return state
  }
}