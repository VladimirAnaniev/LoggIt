import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginFrom from './LoginForm'
import PropTypes from 'prop-types'
import { changeLoginForm, login } from '../../../actions/authActions'
import { Row, Col, CardPanel } from 'react-materialize'

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
    const {formState} = this.props
    return (
      <Row>
        <Col s={12} m={6} offset='m3'>
          <CardPanel>
            <LoginFrom
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
    formState: state.auth.loginForm
  }
}

export default connect(mapStateToProps)(Login)
