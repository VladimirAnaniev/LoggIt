import {
  LOAD_ALL_USERS,
  CHANGE_USERS_PAGE
} from './actionTypes'
import REST from '../utilities/rest'
import { fetchSuccess, fetchError, loading } from './feedbackActions'

export function getAllUsers (page = 1) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get(`user/all?page=${page}`, true)
      .then(result => {
        if(result.success) {
          dispatch(loadAllUsers(result.users))
          dispatch(loading(false))
        } else {
          dispatch(fetchError(result.message))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

function loadAllUsers (newState) {
  return {type: LOAD_ALL_USERS, newState}
}

export function toggleAdminState (id, newState) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.post(`user/${id}/admin`, {newState}, true)
      .then(result => {
        if(result.success) {
          dispatch(fetchSuccess(result.message))
          dispatch(getAllUsers())
        } else {
          dispatch(fetchError(result.message))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

export function toggleBlockedState (id, newState) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.post(`user/${id}/block`, {newState}, true)
      .then(result => {
        if(result.success) {
          dispatch(fetchSuccess(result.message))
          dispatch(getAllUsers())
        } else {
          dispatch(fetchError(result.message))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

export function changePage (page) {
  return {type: CHANGE_USERS_PAGE, page}
}
