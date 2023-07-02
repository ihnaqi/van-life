import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/svgs/vanlife.svg'

export default function Header () {
   return (
      <header className='header'>
          <Link className="logo"
            to="/"> <img src={logo} alt='logo'/> </Link>
        <nav>
          <NavLink
            className={`links ${({isActive}) => isActive ? 'link-active' : null}`}
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={`links ${({isActive}) => isActive ? 'link-active' : null}`}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={`links ${({isActive}) => isActive ? 'link-active' : null}`}
            to="vans"
          >
            Van
          </NavLink>
        </nav>
      </header>
   )
}