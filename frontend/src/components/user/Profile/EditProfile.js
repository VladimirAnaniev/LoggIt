import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CardPanel } from 'react-materialize'
import { Link } from 'react-router-dom'

class EditProfile extends Component {
  static propTypes = {
  }

  componentWillMount = () => {
  }

  render () {
    return (
      <CardPanel>
        EDIT_PROFILE
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(EditProfile)
