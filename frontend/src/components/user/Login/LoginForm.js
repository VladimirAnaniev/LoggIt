import React from 'react'
import Input from '../../common/Forms/Input'
import PropTypes from 'prop-types'
import StyledForm from '../../common/Forms/StyledForm'
import StyledButton from '../../common/Forms/StyledButton'

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
    <StyledForm>
      <Input
        type='email'
        name='email'
        value={user.email}
        placeholder='E-mail'
        onChange={onChange} />
      <Input
        type='password'
        name='password'
        value={user.password}
        placeholder='Password'
        onChange={onChange} />
      <StyledButton type='submit' value='Login' onClick={onSubmit} />
    </StyledForm>
  )
}