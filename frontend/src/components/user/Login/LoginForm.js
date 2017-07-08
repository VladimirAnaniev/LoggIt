import React from 'react'
import Input from '../../common/Input'
import PropTypes from 'prop-types'

Input.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  error: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default function LoginForm ({user, error, onChange, onSubmit}) {
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
        <input type='submit' value='login' onClick={onSubmit} />
        <br />
      </form>
    </div>
  )
}