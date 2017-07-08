import {
  LOADING,
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../actions/actionTypes'
import Auth from '../utilities/Auth'

const initialState = { //TODO: Add all auth related state here
  registerForm: {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  },
  registerError: '',
  loginForm: {
    email: '',
    password: ''
  },
  loginError: '',
  isLoggedIn: Auth.isUserAuthenticated(),
  loading: false,
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
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        registerError: action.errorMessage
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegisterSuccessful: true
      })
    case CHANGE_LOGIN_FORM:
      return Object.assign({}, state, {
        loginForm: action.newState
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.errorMessage
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true
      })
    default:
      return state
  }
}