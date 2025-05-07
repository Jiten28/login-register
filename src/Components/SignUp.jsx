import React from 'react'

import { useNavigate } from 'react-router-dom';


function SignUp()  {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/login')
        }
    return (
        <div className='w-full h-screen bg-slate-500 bg-coverp-5 flex justify-center items-center'>
            <div className='box-border w-80 h-96 bg-indigo-300 shadow-xl rounded-2xl border-solid border-2 border-cyan-400 flex justify-center items-center'>
                <form action=''>
                    <h1>Create an account</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>

                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />

                    </div>
                    <div className="input-box">
                        <input type="tel" placeholder='Phone Number' maxLength={10} required />

                    </div>
                    <div className="input-box">
                        <input type= "password" placeholder='Password' required />

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

