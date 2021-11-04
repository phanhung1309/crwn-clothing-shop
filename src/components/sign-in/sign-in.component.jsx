import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    setEmail('')
    setPassword('')
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          name='email'
          type='email'
          changeHandler={emailChangeHandler}
          value={email}
          label='Email'
          required
        ></FormInput>
        <FormInput
          name='password'
          type='password'
          changeHandler={passwordChangeHandler}
          value={password}
          label='Password'
          required
        ></FormInput>
        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
