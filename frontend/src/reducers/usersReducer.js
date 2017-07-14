import {
  CHANGE_PROFILE_DATA,
  CHANGE_USERS_COUNT
} from '../actions/actionTypes'

const initialState = {
  profile: {
    email: '',
    name: '',
    age: '',
    location: '',
    roles: []
  },
  usersCount: 0
}

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROFILE_DATA:
      return Object.assign({}, state, {
        profile: action.profile
      })
    case CHANGE_USERS_COUNT:
      return Object.assign({}, state, {
        usersCount: action.newState
      })
    default:
      return state
  }
}
