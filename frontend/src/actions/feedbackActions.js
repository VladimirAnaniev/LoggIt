import {
  LOADING,
  SUCCESS,
  ERROR
} from './actionTypes'

export function error (message) {
  return (dispatch) => {
    dispatch({type: ERROR, message})

    setTimeout(() => {
      dispatch(clearError())
    }, 2000)
  }
}

export function clearError () {
  return {type: ERROR, message: ''}
}

export function success (message) {
  return (dispatch) => {
    dispatch({type: SUCCESS, message})

    setTimeout(() => {
      dispatch(clearSuccess())
    }, 2000)
  }
}

export function clearSuccess () {
  return {type: SUCCESS, message: ''}
}

export function loading (newState) {
  return {type: LOADING, newState}
}

export function fetchError (message) {
  return (dispatch) => {
    dispatch(error(message))
    dispatch(loading(false))
  }
}

export function fetchSuccess (message) {
  return (dispatch) => {
    dispatch(success(message))
    dispatch(loading(false))
  }
}
