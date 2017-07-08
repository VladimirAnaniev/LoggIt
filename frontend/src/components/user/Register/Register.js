import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register, changeRegisterForm} from '../../../actions/authActions'
import RegisterForm from './RegisterForm'

class Register extends Component {
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
    const { formState, loading, error} = this.props
    return ( //TODO: handle request loading
      <div>
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
    loading: state.authReducer.loading
  }
}

export default connect(mapStateToProps)(Register)