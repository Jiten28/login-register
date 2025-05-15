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
    <div className="w-full h-screen flex bg-cover bg-[#000000]/90" >
      <div className="w-60 h-60 bg-gradient-to-tr from-[#FCA311] to-[#14213D] rounded-full flex items-center justify-center absolute inset-0 m-auto text-white font-bold animate-bounce">
    <div className="text-center">
      <label className="text-4xl block">Coming</label>
      <label className="text-4xl block">Soon...</label>
    </div>
    </div>
      <div className='w-full flex item-center justify-end mt-10 mr-10'>

        <button onClick={handleClickLogin} className='type-button w-28 h-8 me-2 bg-[#FCA311] 
          active:scale-[.98] active:duration-75 transition-all hover:scale-[1.1]  ease-in-out transform
          rounded-full align-right border-2 
          border-[#E5E5E5] border-double text-[#03045e] font-bold'>Login</button>

        <button onClick={handleClickSignUp} className='type-button w-28 h-8 mw-2 bg-[#FCA311]
          active:scale-[.98] active:duration-75 transition-all hover:scale-[1.1]  ease-in-out transform
          rounded-full align-right border-2 
          border-[#E5E5E5] border-double text-[#03045e] font-bold'>SignUp</button>

      </div>
    </div>
  )
}
export default Home
