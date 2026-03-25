import { useState } from "react"
import useFetch from "./useFetch"

const DashboardPosts = () => {
  const [more, setMore] = useState({})
  const {data: posts, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
  const {data: users} = useFetch('https://jsonplaceholder.typicode.com/users')
  

  if(loading) return <p>Loading posts...</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Posts</h2>
        <p className='text-gray-600'>View all published posts</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <div key={post.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer'>
            <div className='bg-gradient-to-r from-blue-500 to-blue-600 h-32'></div>
            <div className='p-6'>
              <div className='mb-4'>
                <div className='inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2'>
                  Technology
                </div>
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>{post.title}</h3>
              <p className={`text-gray-600 text-sm mb-4 ${more[post.id]?'line-clamp-1':''}`}>
                {post.body}
              </p>
              <div className='flex justify-between items-center'>
                <span className='text-xs text-gray-500'>{users.find(user=> user.id===post.userId)?.username||'Unknown'}</span>
                <button onClick={()=>setMore(prev=>({...prev, [post.id]: !prev[post.id]}))} className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition font-medium'>
                  {more[post.id]?'More':'Less'}
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
