import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utilities/Auth'

export default function Navbar () {
  return (
    <div className='menu'>
      <nav >
        <Link to='/'>Home</Link>
        {Auth.isUserAuthenticated() ? (
          <div className="inline-block">

          </div>
        ) : (
          <div className="inline-block">
            <Link to='/user/register'>Register</Link>
            <Link to='/user/login'>Login</Link>
          </div>
        )}
      </nav>
    </div>
  )

}
