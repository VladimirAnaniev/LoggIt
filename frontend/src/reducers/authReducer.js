import { REGISTER_REQUEST, CHANGE_REGISTER_FORM, REGISTRATION_ERROR, REGISTRATION_SUCCESS } from '../actions/actionTypes'
import Auth from '../utilities/Auth'

const initialState = { //TODO: Add all auth related state here
  formState: {
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  },
  isRegisterSuccessful: Auth.isUserAuthenticated(),
  currentlySending: false,
  errorMessage: ''
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        currentlySending: action.newState
      })
    case CHANGE_REGISTER_FORM:
      return Object.assign({}, state, {
        formState: action.newState
      })
    case REGISTRATION_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      })
    case REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        isRegisterSuccessful: true
      })
    default:
      return state
  }
}