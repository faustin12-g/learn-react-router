import React from 'react'

const DashboardComments = () => {
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Comments</h2>
        <p className='text-gray-600'>View all user comments</p>
      </div>

      <div className='space-y-4'>
        {[1, 2, 3, 4, 5].map((comment) => (
          <div key={comment} className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition'>
            <div className='flex items-start gap-4 mb-4'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold'>
                U{comment}
              </div>
              <div className='flex-1'>
                <h4 className='text-lg font-semibold text-gray-900'>User {comment}</h4>
                <p className='text-sm text-gray-500'>user{comment}@email.com</p>
              </div>
              <button className='px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded text-sm transition'>
                Delete
              </button>
            </div>
            <p className='text-gray-700 leading-relaxed'>
              This is a sample comment text. It contains the user's feedback or opinion about something. Comments are important for gathering feedback and building community engagement.
            </p>
            <div className='mt-4 text-xs text-gray-400'>
              Posted on {new Date().toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardComments
