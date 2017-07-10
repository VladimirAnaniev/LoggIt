import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const NavItem = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
}
`
function NavBar ({isLoggedIn = false}) {
  return (
    <Nav>
      <NavItem><Link to='/'>Home</Link></NavItem>

      {isLoggedIn ? (
        <div>
          <NavItem><Link to="/user/logout">Logout</Link></NavItem>
        </div>
      ) : (
        <div>
          <NavItem><Link to='/user/register'>Register</Link></NavItem>
          <NavItem><Link to='/user/login'>Login</Link></NavItem>
        </div>
      )}
    </Nav>
  )
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
