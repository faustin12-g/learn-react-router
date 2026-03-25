import React from 'react'

const DashboardPosts = () => {
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Posts</h2>
        <p className='text-gray-600'>View all published posts</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div key={post} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer'>
            <div className='bg-gradient-to-r from-blue-500 to-blue-600 h-32'></div>
            <div className='p-6'>
              <div className='mb-4'>
                <div className='inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2'>
                  Technology
                </div>
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Post Title {post}</h3>
              <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                This is a sample post description. It contains the main content or excerpt of the blog post or article. Posts are used to share information and engage with the audience.
              </p>
              <div className='flex justify-between items-center'>
                <span className='text-xs text-gray-500'>By User {post}</span>
                <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition font-medium'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPosts
