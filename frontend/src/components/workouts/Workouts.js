import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { fetchWorkouts, changePage, getPagesCount, deleteWorkout } from '../../actions/workoutsActions'
import { CardPanel, Button, Pagination } from 'react-materialize'
import WorkoutsTable from './WorkoutsTable'

class Workouts extends Component {
  //static propTypes = {}
  componentWillMount = () => {
    this.props.dispatch(getPagesCount())
    this.props.dispatch(fetchWorkouts())
  }

  handlePageSelect = (page) => {
    this.props.dispatch(changePage(page))
  }

  handleWorkoutDeletion = (id) => () => {
    this.props.dispatch(deleteWorkout(id))
  }

  render () {
    const {workouts, page, pages} = this.props
    const count = workouts.length
    return (
      <CardPanel>
        <Button onClick={() => {this.props.history.push('/workout/create')}}>Add new workout</Button>
        {count > 0 ? (
          <div>
            <WorkoutsTable workouts={workouts} onDelete={this.handleWorkoutDeletion} />
            <Pagination items={pages} activePage={page} onSelect={this.handlePageSelect} />
          </div>
        ) : (
          <div>No workouts to show</div>
        )}
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts.workouts,
    page: state.workouts.page,
    pages: state.workouts.pages
  }
}

export default connect(mapStateToProps)(Workouts)