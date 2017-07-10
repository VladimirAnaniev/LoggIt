import {
  LOAD_WORKOUT_DETAILS,
  LOAD_WROKOUTS,
  CHANGE_PAGE,
  SET_WORKOUT_PAGES_COUNT
} from '../actions/actionTypes'

const initialState = {
  page: 1,
  pages: 1,
  workouts: [],
  details: {
    //TODO
  }
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
        pagesCount: action.newCount
      })
    default:
      return state
  }
}