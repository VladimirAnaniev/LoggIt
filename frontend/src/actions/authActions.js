import {
  LOADING,
  CHANGE_REGISTER_FORM,
  CHANGE_LOGIN_FORM,
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS} from './actionTypes'
import REST from '../utilities/rest'
import Auth from '../utilities/Auth'

export function register (user) {
  return (dispatch) => {
    dispatch(loading(true))

    let validation = validateRegistration(user)
    if (!validation.isValid) {
      dispatch(registerError(validation.message))
      dispatch(loading(false))
      return
    }

    REST.post('auth/register', user)
      .then(result => {
        if(!result.success) {
          dispatch(registerError(result.message))
          dispatch(loading(false))
          return
        }

        dispatch(registerSuccess())
        dispatch(loading(false))
        dispatch(login({email: user.email, password: user.password}))
      })
      .catch(err => {
        dispatch(registerError(err))
        dispatch(loading(false))
      })
  }
}

export function login (user) {
  return (dispatch) => {
    dispatch(loading(true))

    let validation = validateLogin(user)
    if (!validation.isValid) {
      dispatch(loginError(validation.message))
      dispatch(loading(false))
      return
    }

    REST.post('auth/login', user)
      .then(result => {
        if(!result.success) {
          dispatch(loginError(result.message))
          dispatch(loading(false))
          return
        }

        dispatch(loginSuccess())
        dispatch(loading(false))
        Auth.authenticateUser(result.token)
        Auth.saveUser(result.user)
      })
      .catch(err => {
        dispatch(loginError(err))
        dispatch(loading(false))
      })
  }
}

function validateLogin (user) {
  return {isValid:true} //TODO
}

function validateRegistration (user) {
  //TODO: validate, return Obj {isValid: true|false, ?err:[err message]}
  return {isValid: true}
}

function loading (newState) {
  return {type: LOADING, newState}
}

export function changeRegisterForm (newState) {
  return {type: CHANGE_REGISTER_FORM, newState}
}

export function registerError (errorMessage) {
  return {type: REGISTER_ERROR, errorMessage}
}

export function registerSuccess () {
  return {type: REGISTER_SUCCESS}
}

export function changeLoginForm (newState) {
  return {type: CHANGE_LOGIN_FORM, newState}
}

export function loginError (errorMessage) {
  return {type: LOGIN_ERROR, errorMessage}
}

export function loginSuccess () {
  return {type: LOGIN_SUCCESS}
}