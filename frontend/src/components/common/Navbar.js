import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navbar, NavItem } from 'react-materialize'

function NavBar ({isLoggedIn = false}) {
  if (isLoggedIn) {
    return (
      <Navbar className='blue-grey darken-4' brand="LoggIt" right>
        <NavItem><Link to='/'>Home</Link></NavItem>
        <NavItem><Link to="/workouts">Workouts</Link></NavItem>
        <NavItem><Link to="/profile">Profile</Link></NavItem>
        <NavItem><Link to="/logout">Logout</Link></NavItem>
      </Navbar>
    )
  } else {
    return (
      <Navbar className='blue-grey darken-4' brand="LoggIt" right>
        <NavItem><Link to='/'>Home</Link></NavItem>
        <NavItem><Link to='/register'>Register</Link></NavItem>
        <NavItem><Link to='/login'>Login</Link></NavItem>
      </Navbar>
    )
  }
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(NavBar)
