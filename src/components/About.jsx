import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <h1 className='text-5xl font-bold text-gray-900 mb-8'>About Us</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-12'>
          <Link 
            to='/about/overview' 
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-200'
          >
            Overview
          </Link>
          <Link 
            to='/about/team' 
            className='bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-200'
          >
            Team
          </Link>
          <Link 
            to='/about/campany' 
            className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-200'
          >
            Company
          </Link>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default About
