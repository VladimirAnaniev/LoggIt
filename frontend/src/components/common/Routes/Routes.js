import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import UnauthorizedOnlyRoute from './UnauthorizedOnlyRoute'
import Home from '../../home/Home'
import Login from '../../user/Login/Login'
import Register from '../../user/Register/Register'
import Logout from '../../user/Logout'
import Profile from '../../user/Profile'
import NotFound from '../../home/NotFound'
import Workouts from '../../workouts/Workouts'
import CreateWorkout from '../../workouts/create/CreateWorkout'
import WorkoutDetails from '../../workouts/details/WorkoutDetails'
import EditWorkout from '../../workouts/edit/EditWorkout'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <UnauthorizedOnlyRoute path='/login' component={Login} />
      <UnauthorizedOnlyRoute path='/register' component={Register} />
      <PrivateRoute path='/profile' component={Profile} />
      <PrivateRoute path='/logout' component={Logout} />
      <PrivateRoute path='/workouts' component={Workouts} />
      <PrivateRoute path='/workout/create' component={CreateWorkout} />
      <PrivateRoute exact path='/workout/:id' component={WorkoutDetails} />
      <PrivateRoute path='/workout/:id/edit' component={EditWorkout} />
      <Route component={NotFound} />
    </Switch>
  )
}
