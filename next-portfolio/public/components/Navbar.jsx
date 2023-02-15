import React from 'react'
import Logonav from '../assets/Asset 1.svg'

function Navbar() {
  return (
    <div id='nav' className='flex'>
      <div>
        <img className='h-[32px] w-[32px]' src={Logonav} alt="/" />
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