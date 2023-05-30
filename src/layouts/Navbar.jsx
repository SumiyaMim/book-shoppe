import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
        <h3>Book Shoppe</h3>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/show-books" className="nav-link">Books</NavLink>
        <NavLink to="/add-book" className="nav-link">Add Book</NavLink>
     </nav>
  )
}

export default Navbar
