import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { CgSpinner } from "react-icons/cg";

export default function Signin() {
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className="title flex flex-col items-center">
                    <h5 className='text-5xl font-bold'>Welcome Back</h5>
                    <span className='py-4 text-xl w-3/3 text-center text-gray-500'> 
                        Please sign in to your account
                    </span>
                </div>
                <div>
                    <PhoneInput country={"in"}  value={ph} onChange={setPh}/>
                </div>   
           <button
            //onClick={}
            className="bg-yellow-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
            {loading && (
            <CgSpinner size={20} className="mt-1 animate-spin" />
            )}
            <span><Link to='/verify'>Sign In with OTP</Link></span>
        </button> 
        </div>
    </div>
</div>
 )
}




