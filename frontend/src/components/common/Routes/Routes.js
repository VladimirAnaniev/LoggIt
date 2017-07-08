import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import UnauthorizedOnlyRoute from './UnauthorizedOnlyRoute'
import Home from '../../home/Home'
import Login from '../../user/Login/Login'
import Register from '../../user/Register/Register'
import Logout from '../../user/Logout'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <UnauthorizedOnlyRoute path='/user/login' component={Login} />
      <UnauthorizedOnlyRoute path='/user/register' component={Register} />
      <PrivateRoute path='/users/logout' component={Logout} />
    </Switch>
  )
}
