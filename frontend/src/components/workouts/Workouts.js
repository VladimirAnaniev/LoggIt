import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Workouts extends Component {
  static propTypes = {}

  render () {
    return <div>WORKOUTS</div>
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Workouts)