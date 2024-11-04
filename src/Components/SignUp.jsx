import React from 'react'
import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Background from '../Asserts/Images/Background.png';

function SignUp()  {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/login')
        }
    return (
        <div className='w-full h-screen bg-slate-500 bg-coverp-5 flex justify-center items-center' style={{ backgroundImage: `url(${Background})` }}>
            <div className='box-border w-80 h-96 bg-indigo-300 shadow-xl rounded-2xl border-solid border-2 border-cyan-400 flex justify-center items-center'>
                <form action=''>
                    <h1>Create an account</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <MdEmail className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="tel" placeholder='Phone Number' maxLength={10} required />
                        <FaPhone className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type= "password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <button type='submit' className='w-64 h-8 bg-white rounded-full justify-center'>Sign Up</button>
                    <div className="register-link">
                        <p>Already have an account? <button onClick={handleClick} >Login</button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}        
export default SignUp

