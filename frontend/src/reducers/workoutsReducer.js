import {
  LOAD_WORKOUT_DETAILS,
  LOAD_WROKOUTS,
  CHANGE_PAGE,
  SET_WORKOUT_PAGES_COUNT,
  CHANGE_WORKOUT_FORM,
  WORKOUT_CREATED,
  RESET_WORKOUT_FORM,
  CHANGE_WORKOUTS_COUNT
} from '../actions/actionTypes'

const initialState = {
  page: 1,
  pages: 1,
  workouts: [],
  details: {
    name: '',
    date: new Date().toLocaleDateString(),
    exercises: []
  },
  formState: {
    name: '',
    exercises: []
  },
  wasCreated: false,
  workoutsCount: 0
}

export default function workoutsReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    case LOAD_WROKOUTS:
      return Object.assign({}, state, {
        workouts: action.workouts
      })
    case LOAD_WORKOUT_DETAILS:
      return Object.assign({}, state, {
        details: action.details
      })
    case SET_WORKOUT_PAGES_COUNT:
      return Object.assign({}, state, {
        pages: action.newCount
      })
    case CHANGE_WORKOUT_FORM:
      return Object.assign({}, state, {
        formState: action.newState
      })
    case WORKOUT_CREATED:
      return Object.assign({}, state, {
        wasCreated: true
      })
    case RESET_WORKOUT_FORM:
      return Object.assign({}, state, {
        wasCreated: false,
        formState: {
          name: '',
          exercises: []
        }
      })
    case CHANGE_WORKOUTS_COUNT:
      return Object.assign({}, state, {
        workoutsCount: action.newState
      })
    default:
      return state
  }
}