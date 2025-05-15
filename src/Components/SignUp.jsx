import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function SignUp({ setUser, setAuthState }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErrors, setPasswordErrors] = useState([]);

    const validatePassword = (pw) => {
        const errors: string[] = [];

        if (pw.length < 10) errors.push('Password must be at least 10 characters long');
        if (pw.length > 24) errors.push('Password must be at most 24 characters long');
        if (/\s/.test(pw)) errors.push('Password cannot contain spaces');
        if (!/[0-9]/.test(pw)) errors.push('Password must contain at least one number');
        if (!/[a-z]/.test(pw)) errors.push('Password must contain at least one lowercase letter');
        if (!/[A-Z]/.test(pw)) errors.push('Password must contain at least one uppercase letter');
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(pw)) errors.push('Password must contain at least one special character');

        return errors;
    };

    const handleClick = () => navigate('/login');

    const handleSignUp = () => {
        const errors = validatePassword(password);
        if (errors.length > 0) {
            setPasswordErrors(errors);
            return;
        }

        // Proceed with signup logic
        alert('Signed up successfully!');
    };

    return (
        <div className='w-full h-full flex items-center justify-center bg-[#000000]/90 text-[#14213D]'>
            <div className='w-full h-full max-w-[700px] px-5 py-10 rounded-3xl bg-[#E5E5E5]/80 border-4 border-[#000000]/10'>
                <h1 className='text-5xl font-bold'>New Here?</h1>
                <p className='font-medium text-lg text-gray-800 mt-4'>Let’s Get You Signed Up!</p>
                <div className='mt-8 ' >
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Username</label>
                        <input className='w-full bg-white/50 border-2 border-gray-100 rounded-xl p-4 mt-1 ' type="text" placeholder='Enter your Username' required />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Email</label>
                        <input className='w-full bg-white/50 border-2 border-gray-100 rounded-xl p-4 mt-1 ' type="email" placeholder="Enter your email" />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Phone Number</label>
                        <input className='w-full bg-white/50 border-2 border-gray-100 rounded-xl p-4 mt-1 ' type="tel" placeholder='Enter your Phone Number' maxLength={10} required />
                    </div>

                    {/* Password Field with Toggle & Validation */}
                    <div className='flex flex-col mt-4 relative'>
                        <label className='text-lg font-medium'>Password</label>
                        <input
                            className='w-full bg-white/50 border-2 border-gray-100 rounded-xl p-4 mt-1  pr-12'
                            placeholder="Enter your password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordErrors(validatePassword(e.target.value));
                            }}
                        />
                        <div
                            className="absolute right-4 top-[52px] cursor-pointer text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </div>
                        
                        {passwordErrors.length > 0 && (
                            <ul className="text-sm text-red-600 mt-2 list-disc list-inside">
                                {passwordErrors.map((err, idx) => <li key={idx}>{err}</li>)}
                            </ul>
                        )}
                    </div>

                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            onClick={handleSignUp}
                            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-[#FCA311] rounded-xl text-[#03045e] font-bold text-lg border-2 border-yellow-400'>
                            Sign up
                        </button>
                        <button
                            className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg bg-[#FEFAE0]/70 border-2 border-gray-100 border-yellow-400'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453..." fill="#EA4335" />
                                <path d="M16.0406 18.0142..." fill="#34A853" />
                                <path d="M19.8342 20.9978..." fill="#4A90E2" />
                                <path d="M5.27698 14.2663..." fill="#FBBC05" />
                            </svg>
                            Sign up with Google
                        </button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Already have an account?</p>
                        <button onClick={handleClick} className='ml-2 font-medium text-base text-violet-500'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
