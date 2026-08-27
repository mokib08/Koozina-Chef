import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const Register = () => {

    const {register, handleSubmit} = useForm();

    const RegisterHandler = (user) => {
        console.log(user)
    }

  return (
    <form className='flex flex-col w-1/2 items-start' onSubmit={handleSubmit(RegisterHandler)}>
      <input
        {...register('username')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='text'
        placeholder='username'
      />

      <input
        {...register('email')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='email'
        placeholder='email'
      />

      <input
        {...register('password')}
        className='mb-3 outline-0 border-b p-2 text-2xl'
        type='password'
        placeholder='password'
      />

      <button className='mt-5 px-4 py-2 bg-blue-400 rounded' >Register</button>
      <p>
        Already have an account? <Link className='text-blue-400' to='/login'>Login</Link>
      </p>

    </form>
  )
}

export default Register
