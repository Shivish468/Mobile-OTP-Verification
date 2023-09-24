import React, {useState} from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import logo from '../assets/Verify.jpg'

export default function Verify() {
  const [loading, setLoading] = useState(false)

  const onVerify = () => {
    setLoading(true)
  }
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center h-screen'>
        <div>
          <div className=' flex w-[300px]'>
            <img src={logo} alt='logo' />
          </div>
            <div className="title flex flex-col">
              <h5 className='text-3xl text-center '>Please verify Mobile Number</h5>  
            </div>
          <div>
            <h6 className='text-2xl text-center'>An OTP is sent on your number<></></h6>
          </div>
          <div className='text-1xl justify-center items-center' >
            <p className='hover: underline text-yellow-300  text-center'><Link to='/'>Change Phone Number</Link></p>
          </div>
          <form action='/sendmessage' method='post' id='otp' className='py-4 flex flex-row h-auto justify-center text-center px-2 mt-5'>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='first' maxLength={1} required/>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='second' maxLength={1} required/>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='third' maxLength={1} required/>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='fourth' maxLength={1} required/>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='fifth' maxLength={1} required/>
            <input className='m-5 border h-12 w-12 text-center form-control rounded' type='text' id='sixth' maxLength={1} required/>
          </form>
          <div className='py-4 text-center text-gray-800'>
          <span>Didn't recieve the code? <a href='/verify'>Resend</a></span>
          </div>
        <button onClick={onVerify} className='bg-yellow-600 w-1/2 flex gap-1 items-center justify-center py-2.5 text-white rounded-lg'>
          {loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}
          <span><Link to='/login'>Verify</Link></span>
        </button> 
      </div>
    </div>
  </div>
  )
}
