import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../../utilities/Auth'

export default function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }} />
      )
    )
    } />
  )
}