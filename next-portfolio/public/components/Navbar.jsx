import React from 'react'
import Logo from '../assets/Logo.svg'

function Navbar() {
  return (
    <div id='nav' className='flex'>
      <div>
        <img className='h-20 w-20' src={Logo} alt="/" />
      </div>
      <ul className='flex text-white justify-center'>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Shop</li>
      </ul>
    </div>
  )
}

export default Navbar