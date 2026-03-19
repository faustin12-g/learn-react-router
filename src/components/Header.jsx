import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg'>
      <nav className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex gap-8 items-center'>
          <Link to='/' className='text-white text-lg font-bold hover:text-blue-200 transition duration-200'>
            Home
          </Link>
          <Link to='/about' className='text-white text-lg font-bold hover:text-blue-200 transition duration-200'>
            About
          </Link>
          <div className='flex gap-4 ml-auto'>
            <Link to='/about/overview' className='text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-200'>
              Overview
            </Link>
            <Link to='/about/team' className='text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-200'>
              Team
            </Link>
            <Link to='/about/campany' className='text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-200'>
              Company
            </Link>
          </div>
          <Link to='/contact' className='text-white text-lg font-bold hover:text-blue-200 transition duration-200'>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
