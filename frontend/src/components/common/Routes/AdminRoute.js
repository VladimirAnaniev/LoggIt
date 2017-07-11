import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function AdminRoute ({component: Component, isAdmin, ...rest}) {
  return (
    <Route {...rest} render={props => (
      isAdmin ? (
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

const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapStateToProps)(AdminRoute)