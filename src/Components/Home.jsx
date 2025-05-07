import React from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';



function Home() {

    const navigate = useNavigate();

function handleClickLogin() {
    navigate('/login')
    }
function handleClickSignUp() {
    navigate('/signup')
    }

  return (
    <div className="w-full h-screen flex bg-cover bg-f1f1f1" >
    <div className='w-full flex item-center justify-center lg:w-1/2'>
    <Login />

    </div>
    <div className='hidden relative lg:flex h-full items-center justify-center bg-gray-200 lg:w-1/2'>
      <div className='w-60 h-60 bg-gradient-to-tr from-indigo-500 to-teal-400 rounded-full animate-bounce '></div>
        {/* <div className='w-full h-1/2 absolute bg-white/10 backdrop-blur-lg'></div> */}
        </div>
    </div>
  )
}
export default Home