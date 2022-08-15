import React from 'react'
import '../styles/NavBar.css';
import logo from "../images/logo.png"
function NavBar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo"/>
    </div>
  )
}

export default NavBar