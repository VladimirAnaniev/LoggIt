import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Button } from 'react-materialize'
import ExerciseForm from './ExerciseForm'
import { connect } from 'react-redux'
import { changeWorkoutFormState } from '../../../actions/workoutsActions'

class WorkoutForm extends Component {
  static propTypes = {
    formState: PropTypes.shape({
      name: PropTypes.string,
      exercises: PropTypes.array
    }),
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  }

  handleExerciseDeletion = (index) => () => {
    let oldExercises = this.props.formState.exercises

    let newFormState = Object.assign({}, this.props.formState, {
      exercises: oldExercises.slice(0, index).concat(oldExercises.slice(index + 1))
      //  removes the element at [index]   ^^^
    })

    this.props.dispatch(changeWorkoutFormState(newFormState))
  }

  handleExerciseChange = (index) => (event) => {
    const target = event.target
    const field = target.name
    const value = target.value
    let oldExercises = this.props.formState.exercises

    let newExercise = Object.assign(
      {},
      oldExercises[index],
      {[field]: value}
    )

    let newState = Object.assign({}, this.props.formState, {
      exercises: [...oldExercises.slice(0, index), newExercise, ...oldExercises.slice(index + 1)]
    })

    this.props.dispatch(changeWorkoutFormState(newState))
  }

  handleExerciseAddition = () => {
    let newExercise = {name: '', sets: 0, reps: 0, weight: 0}

    let newExercises = Object.assign({}, this.props.formState, {
      exercises: [...this.props.formState.exercises, newExercise]
    })

    this.props.dispatch(changeWorkoutFormState(newExercises))
  }

  render () {
    const {formState, onChange, onSubmit} = this.props
    const {name, exercises} = formState
    return (
      <Row>
        <Input
          name="name"
          type="text"
          label="Name"
          s={12}
          value={name}
          onChange={onChange}
        />
        {exercises.map((exercise, key) => (
          <ExerciseForm
            key={key}
            {...exercise}
            onDelete={this.handleExerciseDeletion(key)}
            onChange={this.handleExerciseChange(key)}
          />
        ))}
        <Button waves='light' onClick={this.handleExerciseAddition}>Add exercise</Button>
        <Button waves='light' onClick={onSubmit}>Create</Button>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    formState: state.workouts.formState
  }
}

export default connect(mapStateToProps)(WorkoutForm)
