import React from 'react'
import Input from '../../common/Input'
import PropTypes from 'prop-types'

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

export default function RegisterForm ({user, error, onChange, onSubmit}) {
  return (
    <div className='container'>
      <form>
        <div className='error'>{error}</div>
        <Input
          type='email'
          name='email'
          value={user.email}
          placeholder='E-mail'
          onChange={onChange} />
        <br />
        <Input
          type='password'
          name='password'
          value={user.password}
          placeholder='Password'
          onChange={onChange} />
        <br />
        <Input
          type='password'
          name='confirmPassword'
          value={user.confirmPassword}
          placeholder='Confirm-Password'
          onChange={onChange} />
        <br />
        <Input
          name='name'
          value={user.name}
          placeholder='Name'
          onChange={onChange} />
        <input type='submit' value='register' onClick={onSubmit} />
      </form>
    </div>
  )
}
