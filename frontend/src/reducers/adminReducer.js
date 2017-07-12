import {
  LOAD_ALL_USERS,
  CHANGE_PAGE
} from '../actions/actionTypes'

const initialState = {
  users: [],
  page: 1
}

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_USERS:
      return Object.assign({}, state, {
        users: action.newState
      })
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
    default:
      return state
  }
}