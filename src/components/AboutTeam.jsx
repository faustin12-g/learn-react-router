import React from 'react'

const AboutTeam = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-green-600 mb-4'>Our Team</h2>
      <p className='text-lg text-gray-700 leading-relaxed mb-6'>
        This nested page is rendered at <code className='bg-gray-200 px-2 py-1 rounded'>/about/team</code>.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-green-50 border border-green-300 rounded-lg p-4'>
          <h3 className='text-lg font-semibold text-green-700 mb-2'>Team Member 1</h3>
          <p className='text-gray-600'>Expert in design and UX</p>
        </div>
        <div className='bg-green-50 border border-green-300 rounded-lg p-4'>
          <h3 className='text-lg font-semibold text-green-700 mb-2'>Team Member 2</h3>
          <p className='text-gray-600'>Lead developer</p>
        </div>
        <div className='bg-green-50 border border-green-300 rounded-lg p-4'>
          <h3 className='text-lg font-semibold text-green-700 mb-2'>Team Member 3</h3>
          <p className='text-gray-600'>Product manager</p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
