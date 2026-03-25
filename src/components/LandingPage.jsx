import React from 'react'

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto px-6 py-32'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 mb-6'>
            Welcome to Faustin
          </h1>
          <p className='text-2xl text-gray-800 mb-12 max-w-2xl mx-auto'>
            A professional dashboard to manage todos, users, posts, comments, albums, and photos from our API. This is for just learning react, all data are dummy
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-20'>
          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20'>
            <div className='text-4xl mb-4'>📋</div>
            <h3 className='text-xl font-bold text-gray-700 mb-3'>Manage Tasks</h3>
            <p className='text-blue-100'>Create, track, and complete your todos with ease.</p>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20'>
            <div className='text-4xl mb-4'>👥</div>
            <h3 className='text-xl font-bold text-gray-700 mb-3'>User Management</h3>
            <p className='text-blue-100'>View and manage user profiles and information.</p>
          </div>

          <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20'>
            <div className='text-4xl mb-4'>📸</div>
            <h3 className='text-xl font-bold text-gray-700 mb-3'>Media Gallery</h3>
            <p className='text-blue-100'>Browse albums and photos in a beautiful gallery.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
