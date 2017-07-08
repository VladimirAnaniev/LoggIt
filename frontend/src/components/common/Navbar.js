import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utilities/Auth'
import styled from 'styled-components'

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

export default function NavBar () {
  return (
    <Nav>
      <NavItem><Link to='/'>Home</Link></NavItem>

      {Auth.isUserAuthenticated() ? (
        <div className="inline-block">

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
