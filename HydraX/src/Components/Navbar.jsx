import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgMenuRightAlt} from 'react-icons/cg'

const Navbar = () => {

    const [navState, setNavState] = useState(false)
  return (
    <div className='flex flex-row justify-between px-12 py-5 items-center'>
      
          {/* Logos */}
          <div className="flex flex-row gap-2 items-center">
              <img src="./assets/logo-icon.png" className='object-contain w-20 h-20' alt="HydraX Logo" />
              <img src="./assets/logo-text.png" className='object-contain w-16 h-14' alt="HydraX" />
          </div>
          {/* Nav Items */}

          <div className="hidden md:flex  flex-row gap-4 items-center justify-between text-white uppercase">
              <Link to={'/'} className='font-medium duration-75 hover:scale-105'>Home </Link>
              <Link to={'/'} className='font-medium duration-75 hover:scale-105'>Services </Link>
              <Link to={'/'} className='font-medium duration-75 hover:scale-105'>Technologies </Link>
              <Link to={'/'} className='font-medium duration-75 hover:scale-105'>How To </Link>
          </div>

          {/* Nav Buttons Desktop */}
          <div className="hidden md:flex gap-5 items-center justify-between text-[#fff]">
              <button className='border-2 border-white px-4 py-2 rounded-full'>Contact Us</button>
              <button className='border-2 border-white px-4 py-2 rounded-full bg-gradient-to-r from-[#8176AF] to-[]#C0B7E8'>Join HydraX</button>
          </div>

          {/* Nav Menu Mobile */}

          <img src="./assets/Hamburger.png" alt="Hamburger Menu" className='cursor-pointer flex md:hidden' onClick={() => {
              setNavState(!navState)
          }} />

    </div>
  )
}

export default Navbar
