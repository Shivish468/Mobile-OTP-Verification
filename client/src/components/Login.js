import React from 'react'
import poster from '../assets/Poster.jfif'

export default function Login() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen'>
        <div>
          <img src={poster} alt='poster'/>
            <div className="title flex flex-col items-center">
              <h5 className='text-4xl font-bold'>Welcome to AdmitKard</h5>
                <span className='py-1 text-xl w-1/3 text-center text-gray-500'> 
                  In order to provide you with a custom experience,</span>
                  <span className='py-8 text-xl text-center text-black'>We need to ask you a few questions.</span>
                <button className="bg-green-600 w-1/2 flex gap-1 items-center justify-center py-2.5 text-white rounded-lg">
                <span>Login Successfully</span>
                </button> 
            </div>
        </div>
      </div>
    </div>          
  )
}
