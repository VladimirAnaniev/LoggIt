import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Auth from '../../utilities/Auth'

export default function UnauthorizedOnlyRoute ({component: Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
      !Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }} />
      )
    )
    } />
  )
}