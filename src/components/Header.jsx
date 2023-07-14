import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/svgs/vanlife.svg'
import avatarIcon from '../assets/svgs/avatar-icon.svg'
export default function Header () {

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

   return (
      <header className='header'>
          <Link className="logo"
            to="/"> <img src={logo} alt='logo'/> </Link>
        <nav>
          <NavLink
            className={`links ${({isActive}) => isActive ? activeStyle : null}`}
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={`links ${({isActive}) => isActive ? activeStyle : null}`}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={`links ${({isActive}) => isActive ? activeStyle : null}`}
            to="vans"
          >
            Van
          </NavLink>
          <Link
            className="login-link"
            to="login"
          >
            <img src={avatarIcon} className='login-icon' />
          </Link>
          <button onClick={() => {
            localStorage.removeItem("loggedIn");
          }}>X</button>
        </nav>
      </header>
   )
}