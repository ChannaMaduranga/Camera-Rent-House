import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SignIn() {
    return (
        <div className='h-screen '>
            <div className='font-outfit my-16 md:h-[100vh] mx-auto md:w-[60%] w-[90%] sm:w-[70%] lg:w-[40%] md:p-16 p-4 flex justify-center   '>
                <div className='border-2 p-4 md:p-8  rounded-lg py-8 md:py-16 w-full  border-secondary-main'>
                    <h2 className='text-2xl md:text-2xl font-semibold mb-1'>Welcome back!</h2>
                    <p>Enter your Credentials to access your account</p>

                    <form action="">
                        <div className='mt-[5vh] flex flex-col'>
                            <label htmlFor="" className='font-semibold'>Email address</label>
                            <input type="text" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md px-2 text-sm py-1 ' />
                        </div>

                        <div className='mt-[3vh]'>
                            <div className='flex justify-between'>
                                <label htmlFor="" className='font-semibold'>Password</label>
                                <p className='text-sm text-teal-800' >forgot password</p>
                            </div>
                            <input type="password" placeholder='Enter your password' className='border-2 border-gray-300 rounded-md px-2 text-sm py-1 w-full ' />
                        </div>
                        <div className='mt-[5vh] flex flex-col'>
                            
                            <button type="submit"  className='border-2 border-secondary-main text-white rounded-md px-2 text-sm py-1 font-semibold bg-secondary-main hover:bg-teal-900 ' >Login</button>
                        </div>
                        <div className='mt-[6vh] flex flex-row w-full justify-between space-x-2'>
                            
                            <button type="submit"  className='border-2 border-gray-300 text-black rounded-md px-1 text-sm py-1  bg-white w-full flex items-center ' ><FcGoogle className='mr-2'/> Sign in with Google</button>
                            <button type="submit"  className='border-2 border-gray-300 text-black rounded-md px-1 text-sm py-1  bg-white w-full flex items-center' ><FaApple className='mr-1'/> Sign in with Apple</button>
                        </div>
                        <div className='mt-[3vh] text-center'>
                            <p className='text-sm'>Don’t have an account? <a href="/Signup"><span className='text-secondary-main'> Sign Up</span></a> </p>
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn