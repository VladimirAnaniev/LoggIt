import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../../../actions/userActions'
import PropTypes from 'prop-types'
import { CardPanel } from 'react-materialize'
import { Link } from 'react-router-dom'

class Profile extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      roles: PropTypes.array
    })
  }

  componentWillMount = () => {
    this.props.dispatch(fetchProfile())
  }

  render () {
    const {profile} = this.props
    return (
      <CardPanel>
        <h2>Profile</h2>
        <p>Email: {profile.email}</p>
        <p>Name: {profile.name}</p>
        <p>Roles: {profile.roles.map((r, k) => <span key={k}>{r}</span>)}</p>
        {/*<Link to="profile/edit">Edit your profile</Link>*/}
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.users.profile
  }
}

export default connect(mapStateToProps)(Profile)
