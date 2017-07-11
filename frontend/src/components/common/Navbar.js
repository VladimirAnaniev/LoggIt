import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navbar } from 'react-materialize'

function NavBar ({isLoggedIn = false, isAdmin = false}) {
  if (isLoggedIn) {
    return (
      <Navbar className='blue-grey darken-4' brand="LoggIt" right>
        {isAdmin && <li><NavLink to="/admin">Admin Panel</NavLink></li>}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/workouts">Workouts</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/logout">Logout</NavLink></li>
      </Navbar>
    )
  } else {
    return (
      <Navbar className='blue-grey darken-4' brand="LoggIt" right>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
      </Navbar>
    )
  }
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  isAdmin: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(NavBar)
