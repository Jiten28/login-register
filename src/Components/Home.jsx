import React from 'react'
import { useNavigate } from 'react-router-dom';
import Background from '../Asserts/Images/Background.png';


function Home() {

    const navigate = useNavigate();

function handleClickLogin() {
    navigate('/login')
    }
function handleClickSignUp() {
    navigate('/signup')
    }

  return (
    <div className="w-full h-screen bg-cover" style={{ backgroundImage: `url(${Background})` }}>
        <div className="p-5 flex flex-wrap justify-end">
          <button onClick={handleClickLogin} className='type-button w-28 h-8 me-2 bg-indigo-900 rounded-full align-right shadow-2xl ring-1 ring-indigo-300 text-white font-bold'>Login</button>
          <button onClick={handleClickSignUp} className='type-button w-28 h-8 mw-2 bg-indigo-900 rounded-full align-right shadow-2xl ring-1 ring-indigo-300 text-white font-bold'>SignUp</button>
        </div>
  </div>

  )
}
export default Home