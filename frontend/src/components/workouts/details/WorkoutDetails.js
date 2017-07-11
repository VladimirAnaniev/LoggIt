import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchWorkoutDetails } from '../../../actions/workoutsActions'
import { CardPanel } from 'react-materialize'
import WorkoutDetailsTable from './WorkoutDetailsTable'
import { Redirect } from 'react-router-dom'

class WorkoutDetails extends Component {
  static propTypes = {
    workout: PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.any, // Date ?
      exercises: PropTypes.array
    })
  }

  componentWillMount = () => {
    this.props.dispatch(fetchWorkoutDetails(this.props.match.params.id))
  }

  render () {
    const {workout} = this.props
    return (
      <CardPanel>
        {!workout && <Redirect to={{pathname: '/workouts', state: {from: this.props.location}}} />}
        <h3>{workout.name}</h3>
        <WorkoutDetailsTable exercises={workout.exercises}/>
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workout: state.workouts.details
  }
}

export default connect(mapStateToProps)(WorkoutDetails)