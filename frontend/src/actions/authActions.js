import {
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  CHANGE_LOGIN_STATE,
  RESET_AUTH_FORMS,
  SET_ADMIN_STATUS
} from './actionTypes'
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
    dispatch(resetAuthForms)
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
        dispatch(loginError(err.message))
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
    dispatch(resetAuthForms)

    if(user.roles.indexOf('Admin') >= 0) {
      dispatch(setAdminStatus(true))
    }
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
    Auth.removeUser()
    dispatch(success('Logout successful.'))
    dispatch(changeLoginState(false))
    dispatch(setAdminStatus(false))
  }
}

const resetAuthForms = {type: RESET_AUTH_FORMS}

function setAdminStatus (newState) {
  return {type:SET_ADMIN_STATUS, newState}
}
