import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../../actions/authActions'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(logout())
  }

  render () {
    return <Redirect to={{
      pathname: '/',
      state: {from: this.props.location}
    }} />
  }
}

export default connect()(Logout)
