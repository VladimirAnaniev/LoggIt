import React, { Component } from 'react'
import Auth from '../../utilities/Auth'

export default class Logout extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    Auth.removeUser()
    this.props.history.push('/')
  }

  render () {
    return <div>Logout</div>
  }
}
