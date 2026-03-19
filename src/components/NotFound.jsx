import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <h1 className='text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-4'>
          404
        </h1>
        <h2 className='text-3xl font-bold text-white mb-4'>Page Not Found</h2>
        <p className='text-gray-400 text-lg mb-8'>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to='/' 
          className='inline-block bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg'
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
