import './HeroSection.css'
import EsummitLogo from '../../assets/E-Summit-Logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    window.location.href = "https://konfhub.com/e-summit25rec";
  };

  const handleLearnClick = () => {
    navigate('/about');
  }
  return (
    <>
    <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white px-6 mt-10">
    
    <div className="text-center">
      <img src={EsummitLogo} width={200} height={200} alt="" className="m-auto" />
      <h1 className="text-3xl md:text-5xl font-bold text-purple-600">
        E-Summit'25 <br /> <span className='text-xl md:text-3xl text-white' >Raghu Engineering College</span>
      </h1>
      <p className=" text-sm md:text-lg text-gray-400 mt-4 max-w-2xl">
        Join the biggest entrepreneurship summit of the year. Connect with
        industry leaders, innovative startups, and fellow entrepreneurs in
        this transformative event.
      </p>
      <div className="mt-6 flex gap-4 justify-center">
        <button onClick={handleRegisterClick} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg">
          Resgister Now
        </button>
        <button onClick={handleLearnClick} className="px-6 py-2 border border-purple-600 text-purple-400 hover:text-purple-300 rounded-lg">
          Learn more
        </button>
      </div>
    </div>
    
  </section>
  </>
  )
}

export default Home
