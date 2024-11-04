import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

function handleClickLogin() {
    navigate('/login')
    }
function handleClickSignUp() {
    navigate('/signup')
    }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-400 to-cyan-400 p-5 flex flex-wrap justify-end">
        <button onClick={handleClickLogin} className='type-button w-28 h-8 bg-white rounded-full align-right shadow-xl border-solid border-2 border-cyan-400'>Login</button>
        <button onClick={handleClickSignUp} className='type-button w-28 h-8 bg-white rounded-full align-right shadow-xl border-solid border-2 border-cyan-400'>SignUp</button>
  </div>

  )
}
export default Home