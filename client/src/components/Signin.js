import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { CgSpinner } from "react-icons/cg";
import logo from '../assets/Admitkard.png'

export default function Signin() {
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);

    const onSignin = () =>{
        setLoading(true)
    }
  return (
        <div className=' container mx-auto'>
            <div className=' flex  justify-center items-center h-screen'>
                <div>
                    <div className=' flex w-[500px]'>
                      <img src={logo} alt='logo'/>
                    </div>
                    <div className="title flex flex-col items-center">
                        <h5 className='text-5xl font-bold'>Welcome Back</h5>
                        <span className='py-4 text-xl w-3/3 text-center text-gray-500'> 
                            Please sign in to your account
                        </span>
                    </div>
                <form action='/verify' id='tele'> 
                    <div className=' flex justify-between items-center'>
                      <PhoneInput country={"in"}  value={ph} onChange={setPh}  />
                    </div>
                <div className=' flex flex-col text-xl items-center text-gray-500'>
                <span>We will send you a one time SMS message,</span> 
                <span>Chages may apply.</span>
                
                </div>  
           <button onClick={onSignin} type='submit' className="bg-yellow-600 w-1/2 rounded-lg items-center justify-center py-2.5 text-white">
            { loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}
            <span><Link to='/verify'>Sign In with OTP</Link></span>
           </button>
        </form>
      </div> 
    </div>
</div>
 )
}




