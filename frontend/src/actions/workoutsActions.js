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
      .then(workouts => {
        dispatch(loadWorkouts(workouts))
        dispatch(loading(false))
      })
      .catch(err => {
        dispatch(error(err))
        dispatch(loading(false))
      })
  }
}

export function getPagesCount () {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get('workout/count', true)
      .then(count => {
        dispatch(setPagesCount(count))
        dispatch(loading(false))
      })
      .catch(err => {
        dispatch(error(err))
        dispatch(loading(false))
      })
  }
}

export function createWorkout (workout) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.post('workout/create', workout, true)
      .then(result => {
        if(!result.success) {
          dispatch(error(result.message))
          dispatch(loading(false))
        } else {
          dispatch(workoutCreated)
          dispatch(success(result.message))
          dispatch(loading(false))
          dispatch(resetCreateWorkoutForm)
        }
      })
      .catch(err => {
        dispatch(error(err.message))
        dispatch(loading(false))
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
