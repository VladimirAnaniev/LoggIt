import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginFrom from './LoginForm'
import PropTypes from 'prop-types'
import {changeLoginForm, login} from '../../../actions/authActions'

class Login extends Component {
  static propTypes = {
    formState: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    }),
    loading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func
  }

  static defaultProps = {
    formState: {
      email: '',
      password: ''
    },
    loading: false,
    error: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(login(this.props.formState))
  }

  handleFormDataChange = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value
    let newState = Object.assign({}, this.props.formState, {[field]: value})

    this.props.dispatch(changeLoginForm(newState))
  }

  render () {
    const {isLoggedIn, formState, loading, error} = this.props
    return ( //TODO: handle request loading
      <div>
        {isLoggedIn && this.props.history.push('/')}
        {loading && <div>loading</div> /*TODO*/}
        <LoginFrom
          user={formState}
          error={error}
          onChange={this.handleFormDataChange}
          onSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state.authReducer.loginForm,
    loading: state.authReducer.loading,
    error: state.authReducer.loginError,
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Login)