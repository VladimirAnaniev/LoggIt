import {
  LOADING,
  SUCCESS,
  ERROR
} from './actionTypes'

export function error (message) {
  return {type: ERROR, message}
}

export function clearError () {
  return {type: ERROR, message: ''}
}

export function success (message) {
  return {type: SUCCESS, message}
}

export function clearSuccess () {
  return {type: SUCCESS, message: ''}
}

export function loading (newState) {
  return {type: LOADING, newState}
}
