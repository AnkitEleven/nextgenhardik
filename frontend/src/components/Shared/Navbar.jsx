import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {

    const navLinkStyle = ({ isActive }) => {
        return {
          fontWeight: isActive ? '600' : '400',
        };
      };
    const navigate = useNavigate();
    const handleClick = ()=>{

        navigate('/sign-in');

    }

    const [isMobNav , setIsMobNav] = useState(false);
    const handleNav = ()=>{
        setIsMobNav(!isMobNav);
    }
    

  return (
    <div className='bg-white shadow-md h-[80px] w-full fixed z-20'>
  <div className='flex max-w-7xl items-center justify-between m-auto h-full px-6'>
    
    {/* Logo */}
    <div className='text-4xl font-bold text-gray-900'>
      <span className="text-black">NextGen</span> <span className="text-[#3B5BFF]">Health</span>
    </div>
    
    {/* Desktop Menu */}
    <div className='hidden md:flex justify-center items-center gap-8 text-lg font-medium text-gray-700'>
      <NavLink style={navLinkStyle} to="/">Home</NavLink>
      {/* <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink> */}
      <NavLink style={navLinkStyle} to="/about-us">About Us</NavLink>
      <NavLink style={navLinkStyle} to="/contact-us">Contact Us</NavLink>

      {/* Login Button */}
      <button 
        className='bg-[#3B5BFF] text-white px-4 py-2 rounded-full shadow hover:scale-105 hover:bg-[#334BFF] duration-300 active:scale-95' 
        onClick={handleClick}
      >
        Log In/Appointment
      </button>
    </div>

    {/* Mobile Menu Button */}
    <svg  
      className={`size-8 md:hidden cursor-pointer z-50 ${isMobNav ? 'text-gray-900' : 'text-gray-700'}`} 
      onClick={handleNav} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>

    {/* Mobile Menu */}
    <div className={`${!isMobNav ? 'hidden' : 'flex'} flex-col absolute top-0 left-0 h-screen w-screen text-white text-2xl justify-center items-center bg-[#3B5BFF] md:hidden transition-all duration-300`}>
      <NavLink className="py-6" style={navLinkStyle} to="/">Home</NavLink>
      
      <NavLink className="py-6" style={navLinkStyle} to="/about-us">About Us</NavLink>
      <NavLink className="py-6" style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
      <NavLink className="py-6" style={navLinkStyle} to="/sign-in">Log In/Appointment</NavLink>
    </div>
  </div>
</div>

  )
}

export default Navbar
