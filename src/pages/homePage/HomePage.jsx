import './homePage.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {

  return (
    <main className='home-page'>

      <Navbar />
      <section>
        <h2>MINIMALIST PORTFOLIO SITE</h2>

        
        <Link to="/about">
        <button>Explore</button>
        </Link>
      </section>
    </main>
  )
}

export default HomePage