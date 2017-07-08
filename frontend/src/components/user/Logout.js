import React from 'react'
import Auth from '../../utilities/Auth'
import { connect } from 'react-redux'

class Logout extends React.Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    Auth.removeUser()
    this.props.history.push('/')
  }

  render () {
    return <div>Logout</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(Logout)


