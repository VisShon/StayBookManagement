import React from 'react'
import '../styles/NavBar.scss';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
function NavBar() {
  return (
      <div className="navbar">
          <Link to='/' className="logo"><img src={logo} style={{height: '100%'}}/></Link>
          <Link to='/addReservations' className = "Book">Add</Link>
      </div>
  )
}

export default NavBar