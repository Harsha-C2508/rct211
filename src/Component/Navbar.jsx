import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display:"flex" , justifyContent:"center"}}>
        <h1>YOUR AUDIO App</h1>
        <Link to='/'>Home</Link>
        <Link to='/login'>Profile</Link>
    </div>
  )
}

export default Navbar