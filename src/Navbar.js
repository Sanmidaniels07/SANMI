import React from 'react'
import {Outlet,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className=''navbar>
    <ul>
    
    <li>
    
    <Link to='/'>
      Home
    </Link>
    
    </li>
    
    <li>
    
    <Link to='/About'>
      About
    
    </Link>
    
    </li>
    
    <li>
    
    <Link to='/Contact'>
      Contact
    
    </Link>
    
    </li>
    
    <li>
    
    <Link to='/Services'>
      services
    
    </Link>
    
    </li>
    
    </ul>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navbar