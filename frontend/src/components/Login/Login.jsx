
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginImage from '../../assets/login.AVIF'

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)

  const { register, handleSubmit } = useForm()

  const LoginHandler = (user) => {
    console.log('Login User:', user)
  }

  const RegisterHandler = (user) => {
    console.log('Register User:', user)
  }

  return (
    <div className='  min-h-[650px] flex items-center justify-center p-5'>
      <div className='w-[80%] h-[600px] flex  rounded-3xl overflow-hidden shadow-xl bg-white'>

        {/* ================= LEFT IMAGE ================= */}
        <div className='hidden md:block w-1/2'>
          <img
            className='w-full h-full object-cover'
            src={loginImage}
            alt='Login'
          />
        </div>


        <div className='w-full md:w-1/2 flex items-center justify-center px-8 sm:px-12 lg:px-20'>
          <div className='w-full max-w-[450px] text-center'>

            {/* ================= LOGIN ================= */}
            {isLogin ? (

              <>
                <h1 className='text-[2.5rem] font-semibold mb-3 text-red-950'>
                  Welcome Back!
                </h1>

                <form
                  className='flex flex-col'
                  onSubmit={handleSubmit(LoginHandler)}
                >
                  <input
                    {...register('email')}
                    className='mb-4 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='email'
                    placeholder='Email'
                  />

                  <input
                    {...register('password')}
                    className='mb-3 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='password'
                    placeholder='Password'
                  />

                  <div className='text-left mb-5'>
                    <button
                      type='button'
                      className='text-sm text-red-500 font-semibold'
                    >
                      Forgot your password?
                    </button>

                  </div>

                  <button
                    type='submit'
                    className='w-full py-4 bg-red-400 hover:bg-red-500 text-white rounded-full text-xl font-semibold transition'
                  >
                    Login
                  </button>

                  <p className='text-gray-500 mt-8 mb-8 text-right text-lg'>
                    Don't have an account?{' '}

                    <button
                      type='button'
                      onClick={() => setIsLogin(false)}
                      className='text-red-500 font-semibold hover:underline'
                    >
                      Register
                    </button>

                  </p>

                </form>

              </>

            ) : (


              /* ================= REGISTER ================= */
              <>
                <h1 className='text-[2.5rem] font-semibold mb-3 text-red-950'>
                  Create Account
                </h1>

                <form
                  className='flex flex-col'
                  onSubmit={handleSubmit(RegisterHandler)}
                >
                  <input
                    {...register('firstName')}
                    className='mb-4 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='text'
                    placeholder='First Name'
                  />
                  <input
                    {...register('lastName')}
                    className='mb-4 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='text'
                    placeholder='Last Name'
                  />
                  <input
                    {...register('email')}
                    className='mb-4 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='email'
                    placeholder='Email'
                  />
                  <input
                    {...register('password')}
                    className='mb-4 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='password'
                    placeholder='Password'
                  />
                  <input
                    {...register('confirmPassword')}
                    className='mb-5 outline-none px-6 py-4 bg-red-100 rounded-2xl text-red-950 text-lg placeholder:text-red-300 focus:ring-2 focus:ring-red-400'
                    type='password'
                    placeholder='Confirm Password'
                  />
                  <button
                    type='submit'
                    className='w-full py-4 bg-red-400 hover:bg-red-500 text-white rounded-full text-xl font-semibold transition'
                  >
                    Register
                  </button>

                  <p className='text-gray-500 mt-5 mb-8 text-right text-lg'>
                    Already have an account?{' '}

                    <button
                      type='button'
                      onClick={() => setIsLogin(true)}
                      className='text-red-500 font-semibold hover:underline'
                    >
                      Login
                    </button>

                  </p>

                </form>

              </>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login