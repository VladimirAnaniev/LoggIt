import {
  CHANGE_PROFILE_DATA,
  CHANGE_USERS_COUNT
} from './actionTypes'
import REST from '../utilities/rest'
import { fetchSuccess, fetchError, loading } from './feedbackActions'

export function fetchProfile () {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get(`user/profile`, true)
      .then(result => {
        if (result.success) {
          dispatch(changeProfileData(result.user))
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

export function changeProfileData (profile) {
  return {type: CHANGE_PROFILE_DATA, profile}
}

export function getAllUsersCount () {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get('user/usersCount')
      .then(result => {
        if(result.success) {
          dispatch(changeUsersCount(result.count))
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

function changeUsersCount (newState) {
  return {type: CHANGE_USERS_COUNT, newState}
}

export function updateProfile (updated) {
  return dispatch => {
    dispatch(loading(true))

    // TODO: validate form

    REST.post('user/profile', {...updated}, true)
      .then(result => {
        if(result.success) {
          dispatch(fetchSuccess(result.message))
          dispatch(changeUsersCount(result.count))
        } else {
          dispatch(fetchError(result.message))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}
