import {
  CHANGE_PAGE,
  LOAD_WORKOUT_DETAILS,
  LOAD_WROKOUTS,
  SET_WORKOUT_PAGES_COUNT,
  CHANGE_WORKOUT_FORM,
  WORKOUT_CREATED,
  RESET_WORKOUT_FORM,
  CHANGE_WORKOUTS_COUNT
} from './actionTypes'
import REST from '../utilities/rest'
import { fetchSuccess, fetchError, loading } from './feedbackActions'
import Validator from '../utilities/Validator'

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
          const pages = Math.ceil(result.count/10,)
          dispatch(setPagesCount(pages))
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

    const validation = Validator.validateWorkoutForm(workout)
    if (!validation.isValid) {
      fetchError(validation.message)
    }

    REST.post('workout/create', workout, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(workoutCreated)
          dispatch(fetchSuccess(result.message))
          dispatch(resetWorkoutForm)
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

export function changeWorkoutFormState (newState) {
  return {type: CHANGE_WORKOUT_FORM, newState}
}

export const resetWorkoutForm = {type: RESET_WORKOUT_FORM}

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

export function deleteWorkout (id) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.post(`workout/${id}/delete`, {id}, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(fetchSuccess(result.message))
          dispatch(fetchWorkouts())
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

export function editWorkout (id, workout) {
  return (dispatch) => {
    dispatch(loading(true))

    const validation = Validator.validateWorkoutForm(workout)
    if (!validation.isValid) {
      fetchError(validation.message)
    }

    REST.post(`workout/${id}`, workout, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(workoutCreated) //TODO: rename to workoutFormSubmitted
          dispatch(fetchSuccess(result.message))
          dispatch(resetWorkoutForm)
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

export function fetchEditWorkout (id) {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get(`workout/${id}`, true)
      .then(result => {
        if(!result.success) {
          dispatch(fetchError(result.message))
        } else {
          dispatch(changeWorkoutFormState(result.workout))
          dispatch(loading(false))
        }
      })
      .catch(err => {
        dispatch(fetchError(err.message))
      })
  }
}

export function getAllWorkoutsCount () {
  return (dispatch) => {
    dispatch(loading(true))

    REST.get('workout/workoutsCount')
      .then(result => {
        if(result.success) {
          dispatch(changeWorkoutsCount(result.count))
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

function changeWorkoutsCount (newState) {
  return {type: CHANGE_WORKOUTS_COUNT, newState}
}
