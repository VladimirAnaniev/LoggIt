import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfile, changeProfileData, updateProfile } from '../../../actions/userActions'
import PropTypes from 'prop-types'
import { CardPanel, Input, Button } from 'react-materialize'

class Profile extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.any,
      location: PropTypes.string
    })
  }

  componentWillMount = () => {
    this.props.dispatch(fetchProfile())
  }

  handleProfileUpdate = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value
    let newState = Object.assign({}, this.props.profile, {[field]: value})

    this.props.dispatch(changeProfileData(newState))
  }

  handleSubmit = () => {
    this.props.dispatch(updateProfile(this.props.profile))
  }

  render () {
    const {profile} = this.props
    return (
      <CardPanel>
        <h2>Profile</h2>
        <p>Email: {profile.email}</p>
        <p>Roles: {profile.roles.join(', ')}</p>
        <Input
          name="name"
          type="text"
          label="Name"
          value={profile.name}
          onChange={this.handleProfileUpdate} />
        <Input
          name="age"
          type="number"
          label="Age"
          value={profile.age}
          onChange={this.handleProfileUpdate} />
        <Input
          name="location"
          type="text"
          label="Location"
          value={profile.location}
          onChange={this.handleProfileUpdate} />
        <Button onClick={this.handleSubmit}>Update</Button>
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
