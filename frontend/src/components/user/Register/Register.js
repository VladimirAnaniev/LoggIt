import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register, changeRegisterForm} from '../../../actions/authActions'
import RegisterForm from './RegisterForm'
import PropTypes from 'prop-types'

class Register extends Component {
  static propTypes = {
    formState: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      confirmPassword: PropTypes.string,
      name: PropTypes.string
    }),
    loading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
    isLoggedIn: PropTypes.bool
  }

  static defaultProps = {
    formState: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    },
    loading: false,
    error: '',
    isLoggedIn: false
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(register(this.props.formState))
  }

  handleFormDataChange = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value
    let newState = Object.assign({}, this.props.formState, {[field]: value})

    this.props.dispatch(changeRegisterForm(newState))
  }


  render () {
    const {isLoggedIn, formState, loading, error} = this.props
    return ( //TODO: handle request loading
      <div>
        {isLoggedIn && this.props.history.push('/')}
        {loading && <div>loading</div> /*TODO*/}
        <RegisterForm
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
    formState: state.authReducer.registerForm,
    error: state.authReducer.registerError,
    loading: state.authReducer.loading,
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Register)