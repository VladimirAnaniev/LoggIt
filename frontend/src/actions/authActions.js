import {
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  CHANGE_LOGIN_STATE} from './actionTypes'
import REST from '../utilities/rest'
import Auth from '../utilities/Auth'
import Validator from '../utilities/Validator'
import {loading, error, success} from './feedbackActions'

export function register (user) {
  return (dispatch) => {
    dispatch(loading(true))

    let validation = Validator.validateRegistration(user)
    if (!validation.isValid) {
      dispatch(registerFail(validation.message))
      return
    }

    REST.post('auth/register', user)
      .then(result => {
        if(!result.success) {
          dispatch(registerFail(result.message))
          return
        }

        dispatch(registerSuccess(user))
      })
      .catch(err => {
        dispatch(registerFail(err))
      })
  }
}

function registerFail (message) {
  return (dispatch) => {
    dispatch(error(message))
    dispatch(loading(false))
  }
}

function registerSuccess (user) {
  return (dispatch) => {
    dispatch(success('Registration successful.'))
    dispatch(loading(false))
    dispatch(login({email: user.email, password: user.password}))
  }
}

export function login (user) {
  return (dispatch) => {
    dispatch(loading(true))

    let validation = Validator.validateLogin(user)
    if (!validation.isValid) {
      dispatch(loginError(validation.message))
      return
    }

    REST.post('auth/login', user)
      .then(result => {
        if(!result.success) {
          dispatch(loginError(result.message))
          return
        }

        dispatch(loginSuccess(result.token, result.user))
      })
      .catch(err => {
        dispatch(loginError(err))
      })
  }
}

function loginSuccess (token, user) {
  return (dispatch) => {
    dispatch(success('Login successful.'))
    dispatch(changeLoginState(true))
    dispatch(loading(false))
    Auth.authenticateUser(token)
    Auth.saveUser(user)
  }
}

function loginError (message) {
  return (dispatch) => {
    dispatch(error(message))
    dispatch(loading(false))
  }
}

export function changeRegisterForm (newState) {
  return {type: CHANGE_REGISTER_FORM, newState}
}

export function changeLoginForm (newState) {
  return {type: CHANGE_LOGIN_FORM, newState}
}

export function changeLoginState (newState) {
  return {type: CHANGE_LOGIN_STATE, newState}
}

export function logout() {
  return (dispatch) => {
    Auth.deauthenticateUser()
    dispatch(success('Logout successful.'))
    dispatch(changeLoginState(false))
  }
}