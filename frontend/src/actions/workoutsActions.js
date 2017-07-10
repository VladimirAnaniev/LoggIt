import {
  CHANGE_PAGE,
  LOAD_WORKOUT_DETAILS,
  LOAD_WROKOUTS,
  SET_WORKOUT_PAGES_COUNT
} from './actionTypes'
import REST from '../utilities/rest'
import { error } from './feedbackActions'

export function fetchWorkouts (page = 1) {
  return (dispatch) => {
    REST.get(`workout/list?page=${page}`, true)
      .then(workouts => {
        dispatch(loadWorkouts(workouts))
      })
      .catch(err => {
        dispatch(error(err))
      })
  }
}

export function getPagesCount () {
  return (dispatch) => {
    REST.get('workout/count', true)
      .then(count => {
        dispatch(setPagesCount(count))
      })
      .catch(err => {
        dispatch(error(err))
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