import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-gray-900 mb-6'>Welcome to Home</h1>
        <p className='text-xl text-gray-600 mb-8'>This is the home page. Navigate to learn about nested routing!</p>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Getting Started</h2>
          <p className='text-gray-700 leading-relaxed'>
            Explore nested routes by clicking on the navigation menu above. You'll see how parent and child routes work together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
