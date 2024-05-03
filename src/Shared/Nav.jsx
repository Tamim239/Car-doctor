import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { UseAuth } from '../Hook/UseAuth'

export const Nav = () => {
  const {user, logOut} = UseAuth()

const navLinks = <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/service">Service</NavLink></li>
<li><NavLink to="/bookingsAll">My Bookings</NavLink></li>
<li><NavLink to="/blog">Blog</NavLink></li>
</>

  return (
    <div className="navbar bg-base-100 h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl">
      <img src={logo} alt="" className='w-20'/>
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
  <button className="btn btn-outline btn-warning">Appointment</button>
  {
    user ? 
  <button onClick={()=> logOut()} className='btn btn-error'>Log Out</button> :
  <Link to="/login">
  <button className='btn btn-primary'>Sign In</button>
  </Link>
  }
 
  </div>
</div>
  )
}
