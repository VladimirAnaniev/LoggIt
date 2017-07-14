import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col, CardPanel } from 'react-materialize'
import CreateWorkoutForm from '../form/WorkoutFrom'
import {createWorkout, changeWorkoutFormState} from '../../../actions/workoutsActions'
import { Redirect } from 'react-router-dom'

class CreateWorkout extends Component {
  static propTypes = {
    formState: PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.array
    }),
    wasCreated: PropTypes.bool
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(createWorkout(this.props.formState))
  }

  handleFormDataChange = (event) => {
    const target = event.target
    const field = target.name
    const value = target.value
    let newState = Object.assign({}, this.props.formState, {[field]: value})

    this.props.dispatch(changeWorkoutFormState(newState))
  }

  render () {
    const {wasCreated} = this.props
    return (
      <Row>
        {wasCreated && <Redirect to={{pathname: '/workouts', state: {from: this.props.location}}} />}
        <Col s={12}>
          <CardPanel>
            <CreateWorkoutForm
              onChange={this.handleFormDataChange}
              onSubmit={this.handleFormSubmit}
            />
          </CardPanel>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state.workouts.formState,
    wasCreated: state.workouts.wasCreated
  }
}

export default connect(mapStateToProps)(CreateWorkout)
