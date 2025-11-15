import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/showcase" className="nav-link">Showcase</Link>
        <Link to="/achievements" className="nav-link">Achievements</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
