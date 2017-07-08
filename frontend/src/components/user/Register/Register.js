import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register, changeRegisterForm } from '../../../actions/authActions'
import RegisterForm from './RegisterForm'

class Register extends Component {
  componentWillReceiveProps = (newProps) => {
    if(newProps.isRegisterSuccessful && !this.props.isRegisterSuccessful) {
      console.log("REGISTER SUCCESS!")
      //TODO: Login
    }
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
    const {formState, error} = this.props
    return ( //TODO: handle request loading
      <div>
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
    ...state.authReducer
  }
}

export default connect(mapStateToProps)(Register)