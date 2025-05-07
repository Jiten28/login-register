import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Background from '../Asserts/Images/Background.png';
import MiniBg from '../Asserts/Images/Mini Background.png';


function LoginPage() {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate('/signup')
        }
    
    return (
        <div className='w-full h-screen bg-slate-500 bg-coverp-5 flex justify-center items-center' style={{ backgroundImage: `url(${Background})` }}>
            <div className='box-border w-80 h-96 bg-[MiniBg] text-white shadow-xl rounded-2xl border-solid border-2 border-cyan-400 flex justify-center items-center'>
                <form action=''>
                    <h1>Login</h1>
                    <div className="input-box ">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label >
                            <input type="checkbox" />Remember me
                        </label>
                        <a href='#'>Forget password</a>
                    </div>
                    <button type='submit'className='w-64 h-8 bg-white rounded-full justify-center'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <button onClick={handleClick} >Register</button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage
