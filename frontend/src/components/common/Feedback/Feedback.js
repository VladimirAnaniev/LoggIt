import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import Success from './Success'
import Error from './Error'
import { clearError, clearSuccess } from '../../../actions/feedbackActions'

class Feedback extends Component {
  handleErrorClick = () => {
    this.props.dispatch(clearError())
  }

  handleSuccessClick = () => {
    this.props.dispatch(clearSuccess())
  }

  render () {
    const {loading, error, success} = this.props
    return (
      <div>
        {loading && <Loading />}
        <Success onClick={this.handleSuccessClick} message={success} />
        <Error onClick={this.handleErrorClick} message={error} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.feedback
  }
}

export default connect(mapStateToProps)(Feedback)