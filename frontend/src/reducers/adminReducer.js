import {
  LOAD_ALL_USERS
} from '../actions/actionTypes'

const initialState = {
  users: []
}

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_USERS:
      return Object.assign({}, state, {
        users: action.newState
      })
    default:
      return state
  }
}