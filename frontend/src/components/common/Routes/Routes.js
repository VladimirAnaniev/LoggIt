import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import UnauthorizedOnlyRoute from './UnauthorizedOnlyRoute'
import AdminRoute from './AdminRoute'
import Home from '../../home/Home'
import Login from '../../user/Login/Login'
import Register from '../../user/Register/Register'
import Logout from '../../user/Logout'
import Profile from '../../user/Profile/Profile'
import NotFound from '../../home/NotFound'
import Workouts from '../../workouts/Workouts'
import CreateWorkout from '../../workouts/create/CreateWorkout'
import WorkoutDetails from '../../workouts/details/WorkoutDetails'
import EditWorkout from '../../workouts/edit/EditWorkout'
import Admin from '../../admin/Admin'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <UnauthorizedOnlyRoute path='/login' component={Login} />
      <UnauthorizedOnlyRoute path='/register' component={Register} />
      <PrivateRoute exact path='/profile' component={Profile} />
      <PrivateRoute path='/logout' component={Logout} />
      <PrivateRoute path='/workouts' component={Workouts} />
      <PrivateRoute path='/workout/create' component={CreateWorkout} />
      <PrivateRoute exact path='/workout/:id' component={WorkoutDetails} />
      <PrivateRoute path='/workout/:id/edit' component={EditWorkout} />
      <AdminRoute path='/admin' component={Admin}/>
      <Route component={NotFound} />
    </Switch>
  )
}
