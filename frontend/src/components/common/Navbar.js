import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render () {
    return (
      <div className='menu'>
        <nav >
          <Link to='/'>Home</Link>
          <Link to='/user/register'>Register</Link>
          <Link to='/user/login'>Login</Link>
        </nav>
      </div>
    )
  }
}
