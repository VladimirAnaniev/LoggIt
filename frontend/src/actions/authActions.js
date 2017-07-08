import {
  REGISTER_REQUEST,
  CHANGE_REGISTER_FORM,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS } from './actionTypes'
import REST from '../utilities/rest'
import Auth from '../utilities/Auth'

/**
 * Register
 * @param user
 * @returns {function(*)}
 */
export function register (user) {
  return (dispatch) => {
    dispatch(sendingRequest(true))

    let validation = validateRegistration(user)
    if (!validation.isValid) {
      dispatch(registrationError(validation.message))
      dispatch(sendingRequest(false))
      return
    }

    REST.post('auth/register', user)
      .then(result => {
        if(!result.success) {
          dispatch(registrationError(result.message))
          dispatch(sendingRequest(false))
          return
        }

        dispatch(registrationSuccess())
        dispatch(sendingRequest(false))
      })
      .catch(err => {
        dispatch(registrationError(err))
        dispatch(sendingRequest(false))
      })
  }
}

/**
 * Validate registration
 * @param user
 * @returns {{isValid: boolean}}
 */
function validateRegistration (user) {
  //TODO: validate, return Obj {isValid: true|false, ?err:[err message]}
  return {isValid: true}
}

/**
 * Sending request
 * @param newState
 * @returns {{type, newState: *}}
 */
function sendingRequest (newState) {
  return {type: REGISTER_REQUEST, newState}
}

/**
 * Change register form
 * @param newState
 * @returns {{type, newState: *}}
 */
export function changeRegisterForm (newState) {
  return {type: CHANGE_REGISTER_FORM, newState}
}

/**
 * Registration error
 * @param errorMessage
 * @returns {{type, errorMessage: *}}
 */
export function registrationError (errorMessage) {
  return {type: REGISTRATION_ERROR, errorMessage}
}

/**
 * Registration success
 * @returns {{type}}
 */
export function registrationSuccess () {
  return {type: REGISTRATION_SUCCESS}
}