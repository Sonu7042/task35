import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header >
      <Link to="/login"><button>Login</button></Link>
      
    </header>
  )
}

export default Header
