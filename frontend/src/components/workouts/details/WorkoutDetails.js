import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchWorkoutDetails } from '../../../actions/workoutsActions'
import { CardPanel, Icon } from 'react-materialize'
import WorkoutDetailsTable from './WorkoutDetailsTable'
import { Link } from 'react-router-dom'

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
        <h3><Link to={`/workouts`}><Icon medium>navigate_before</Icon></Link>{workout.name}</h3>
        <WorkoutDetailsTable exercises={workout.exercises} />
        <Link to={`/workout/${this.props.match.params.id}/edit`}>Edit</Link>
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
