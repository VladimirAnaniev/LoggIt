import React, { Component } from 'react'
import { CardPanel } from 'react-materialize'
import { connect } from 'react-redux'
import { getAllUsersCount } from '../../actions/userActions'
import { getAllWorkoutsCount } from '../../actions/workoutsActions'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentWillMount = () => {
    this.props.dispatch(getAllUsersCount())
    this.props.dispatch(getAllWorkoutsCount())
  }

  render () {
    const { usersCount, workoutsCount, isLoggedIn } = this.props
    return (
      <CardPanel className='center blue lighten-3'>
        <h1>Welcome to LoggIt</h1>
        <h3>A place to store your workout journals and track your progress in the gym</h3>
        <p>Our {usersCount} users have completed {workoutsCount} workouts.</p>
        {isLoggedIn ? (
          <Link className="btn" to="/workout/create">Start a workout</Link>
        ) : (
          <Link className="btn" to="/login">Sign in</Link>
        )}
      </CardPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersCount: state.users.usersCount,
    workoutsCount: state.workouts.workoutsCount,
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Home)
