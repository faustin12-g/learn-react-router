import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white border-b border-gray-200'>
      <nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold text-gray-900'>
          🔥LOGO
        </Link>
        
        <div className='flex gap-8 items-center'>
          <Link to='/' className='text-gray-700 hover:text-gray-900 font-medium transition duration-200'>
            Home
          </Link>
          <Link to='/about' className='text-gray-700 hover:text-gray-900 font-medium transition duration-200'>
            About
          </Link>
          <Link to='/contact' className='text-gray-700 hover:text-gray-900 font-medium transition duration-200'>
            Contact
          </Link>
          <Link to='/dashboard' className='px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 font-medium transition duration-200'>
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
