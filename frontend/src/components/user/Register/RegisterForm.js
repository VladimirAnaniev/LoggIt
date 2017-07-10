import React from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Button } from 'react-materialize'

Input.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    name: PropTypes.string
  }),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default function RegisterForm ({user, onChange, onSubmit}) {
  return (
    <Row>
      <Input
        name="email"
        type="email"
        label="Email"
        s={12}
        value={user.email}
        onChange={onChange} />
      <Input
        name="password"
        type="password"
        label="Password"
        s={12}
        value={user.password}
        onChange={onChange} />
      <Input
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        s={12}
        value={user.confirmPassword}
        onChange={onChange} />
      <Input
        name="name"
        type="text"
        label="Name"
        s={12}
        value={user.name}
        onChange={onChange} />
      <Button waves='light' onClick={onSubmit}>Register</Button>
    </Row>
  )
}
