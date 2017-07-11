import {
  CHANGE_PAGE,
  LOAD_WORKOUT_DETAILS,
  LOAD_WROKOUTS,
  SET_WORKOUT_PAGES_COUNT,
  CHANGE_WORKOUT_CREATE_FORM,
  WORKOUT_CREATED,
  RESET_CREATE_WORKOUT_FORM
} from './actionTypes'
import REST from '../utilities/rest'
import { error, success, loading } from './feedbackActions'

export function fetchWorkouts (page = 1) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get(`workout/list?page=${page}`, true)
      .then(result => {
        if (result.success) {
          dispatch(loadWorkouts(result.workouts))
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

export function getPagesCount () {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get('workout/count', true)
      .then(result => {
        if (result.success) {
          dispatch(setPagesCount(result.count))
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

export function createWorkout (workout) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.post('workout/create', workout, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(workoutCreated)
          dispatch(fetchSuccess(result.message))
          dispatch(resetCreateWorkoutForm)
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

function loadWorkouts (workouts) {
  return {type: LOAD_WROKOUTS, workouts}
}

export function changePage (page) {
  return (dispatch) => {
    dispatch({type: CHANGE_PAGE, page})
    dispatch(fetchWorkouts(page))
  }
}

function loadWorkoutDetails (details) {
  return {type: LOAD_WORKOUT_DETAILS, details}
}

function setPagesCount (newCount) {
  return {type: SET_WORKOUT_PAGES_COUNT, newCount}
}

const workoutCreated = {type: WORKOUT_CREATED}

export function changeCreateFormState (newState) {
  return {type: CHANGE_WORKOUT_CREATE_FORM, newState}
}

const resetCreateWorkoutForm = {type: RESET_CREATE_WORKOUT_FORM}

export function fetchWorkoutDetails (id) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get(`workout/${id}`, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(loadWorkoutDetails(result.workout))
          dispatch(loading(false))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

function fetchError (message) {
  return (dispatch) => {
    dispatch(error(message))
    dispatch(loading(false))
  }
}

function fetchSuccess (message) {
  return (dispatch) => {
    dispatch(success(message))
    dispatch(loading(false))
  }
}
