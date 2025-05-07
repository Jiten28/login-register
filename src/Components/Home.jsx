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
    <div className="w-full h-screen flex bg-cover bg-sky-100" >
      <div className='w-full flex item-center justify-end mt-10 mr-10'>

        <button onClick={handleClickLogin} className='type-button w-28 h-8 me-2 bg-gradient-to-tr 
          active:scale-[.98] active:duration-75 transition-all hover:scale-[1.1]  ease-in-out transform
          from-indigo-500 to-teal-400 rounded-full align-right border-2 
          divide-indigo divide-double text-white font-bold'>Login</button>

        <button onClick={handleClickSignUp} className='type-button w-28 h-8 mw-2 bg-gradient-to-tr 
          active:scale-[.98] active:duration-75 transition-all hover:scale-[1.1]  ease-in-out transform
          from-indigo-500 to-teal-400 rounded-full align-right border-2 
          divide-indigo divide-double text-white font-bold'>SignUp</button>

      </div>
    </div>
  )
}
export default Home
