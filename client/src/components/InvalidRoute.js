import React from 'react'

export default function InvalidRoute() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className="title flex flex-col items-center">
                    <h5 className='text-4xl font-extralight'>Invalid Route Used</h5>
                    <span className='py-4 text-xl w-3/3 text-center text-gray-500'> 
                        Please try again!
                    </span>
                </div>
              </div>
            </div>
        </div>      
    </div>
  )
}
