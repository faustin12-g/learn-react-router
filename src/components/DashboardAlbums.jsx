import React from 'react'

const DashboardAlbums = () => {
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Albums</h2>
        <p className='text-gray-600'>Browse all photo albums</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6].map((album) => (
          <div key={album} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group'>
            <div className='relative h-40 bg-gradient-to-br from-purple-400 to-pink-500 group-hover:darkness(opacity-75) transition flex items-center justify-center'>
              <span className='text-5xl'>🎨</span>
            </div>
            <div className='p-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Album {album}</h3>
              <p className='text-gray-600 text-sm mb-4'>
                User {album} • {Math.floor(Math.random() * 100) + 10} photos
              </p>
              <button className='w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition'>
                View Album
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardAlbums
