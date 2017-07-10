import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Profile extends Component {
  static propTypes = {

  }

  render () {
    return <div>PROFILE</div>
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Profile)
