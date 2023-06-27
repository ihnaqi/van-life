import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import logo from './assets/svgs/vanlife.svg'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <header className='header'>
          <Link className="logo" to="/"> <img src={logo} alt='logo'/> </Link>
        <nav>
          <Link className="links" to="/about"> About </Link>
          <Link className="links" to="/van"> Van </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App