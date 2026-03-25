import React from 'react'
import useFetch from './useFetch'

const DashboardPhotos = () => {
  const {data: photos, loading, error} = useFetch('https://jsonplaceholder.typicode.com/photos')
  const {data: albums} = useFetch('https://jsonplaceholder.typicode.com/albums')
  if(loading) return <p>Loding photos...</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Photos</h2>
        <p className='text-gray-600'>Browse all photos from albums</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {photos.map((photo) => (
          <div key={photo.id} className='group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-300 to-gray-400 aspect-square cursor-pointer'>
            <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-300 to-blue-500 group-hover:opacity-75 transition'>
              <span className='text-4xl'>📸</span>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-end'>
              <div className='w-full bg-black bg-opacity-75 text-white p-3'>
                <p className='text-sm font-semibold'>{photo.thumbnailUrl}</p>
                <p className='text-xs text-gray-400'>{albums.find(album=>album.id===photo.albumId)?.title||'Unkown'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPhotos
