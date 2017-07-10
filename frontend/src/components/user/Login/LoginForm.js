import React from 'react'
import PropTypes from 'prop-types'
import {Row, Input, Button} from 'react-materialize'

Input.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default function LoginForm ({user, onChange, onSubmit}) {
  return (
    <Row>
      <Input name="email" type="email" label="Email" s={12} value={user.email} onChange={onChange} />
      <Input name="password" type="password" label="Password" s={12} value={user.password} onChange={onChange} />
      <Button waves='light' onClick={onSubmit}>Login</Button>
    </Row>
  )
}