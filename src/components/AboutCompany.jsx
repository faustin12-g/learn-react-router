import React from 'react'

const AboutCompany = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-purple-600 mb-4'>About Our Company</h2>
      <p className='text-lg text-gray-700 leading-relaxed mb-6'>
        This nested page is rendered at <code className='bg-gray-200 px-2 py-1 rounded'>/about/campany</code>.
      </p>
      <div className='space-y-4'>
        <div className='bg-purple-50 border-l-4 border-purple-500 p-4 rounded'>
          <h3 className='text-lg font-semibold text-purple-700 mb-2'>Our Mission</h3>
          <p className='text-gray-700'>To provide excellent products and services to our customers worldwide.</p>
        </div>
        <div className='bg-purple-50 border-l-4 border-purple-500 p-4 rounded'>
          <h3 className='text-lg font-semibold text-purple-700 mb-2'>Founded</h3>
          <p className='text-gray-700'>Started in 2020, we have grown to serve thousands of happy customers.</p>
        </div>
        <div className='bg-purple-50 border-l-4 border-purple-500 p-4 rounded'>
          <h3 className='text-lg font-semibold text-purple-700 mb-2'>Values</h3>
          <p className='text-gray-700'>Innovation, integrity, and customer satisfaction drive everything we do.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany
