import React from 'react'
import Input from '../../common/Input'

export default function LoginForm (props) {
  return (
    <div className='container'>
      <form>
        <div className='error'>{props.error}</div>
        <Input
          type='email'
          name='email'
          value={props.user.email}
          placeholder='E-mail'
          onChange={props.onChange} />
        <br />
        <Input
          type='password'
          name='password'
          value={props.user.password}
          placeholder='Password'
          onChange={props.onChange} />
        <input type='submit' value='login' onClick={props.onSubmit} />
        <br />
      </form>
    </div>
  )
}