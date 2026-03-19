import React from 'react'

const AboutOverview = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-600 mb-4'>About Overview</h2>
      <p className='text-lg text-gray-700 leading-relaxed mb-4'>
        This is a nested child route rendered at <code className='bg-gray-200 px-2 py-1 rounded'>/about/overview</code>.
      </p>
      <div className='bg-blue-50 border-l-4 border-blue-500 p-4 rounded'>
        <p className='text-gray-700'>
          Notice how this content appears in the parent About component. The parent component uses &lt;Outlet /&gt; to display this child route's content.
        </p>
      </div>
    </div>
  )
}

export default AboutOverview
