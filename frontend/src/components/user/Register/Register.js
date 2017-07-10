import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register, changeRegisterForm } from '../../../actions/authActions'
import RegisterForm from './RegisterForm'
import PropTypes from 'prop-types'
import { Row, Col, CardPanel } from 'react-materialize'

class Register extends Component {
  static propTypes = {
    formState: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      confirmPassword: PropTypes.string,
      name: PropTypes.string
    })
  }

  static defaultProps = {
    formState: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    },
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
    const {formState} = this.props
    return (
      <Row>
        <Col s={12} m={6} offset='m3'>
          <CardPanel>
            <RegisterForm
              user={formState}
              onChange={this.handleFormDataChange}
              onSubmit={this.handleFormSubmit} />
          </CardPanel>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state.auth.registerForm,
  }
}

export default connect(mapStateToProps)(Register)