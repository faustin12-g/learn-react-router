import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar will go here */}
      <div className='w-64 bg-gray-900 text-white flex flex-col'>
        {/* Logo Section */}
        <div className='px-6 py-8 border-b border-gray-800'>
          <h2 className='text-2xl font-bold'>Dashboard</h2>
          <p className='text-sm text-gray-400'>Admin Panel</p>
        </div>

        {/* Navigation Menu */}
        <nav className='flex-1 px-4 py-8 space-y-4'>
          <Link to='/dashboard/todos'  className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>📋</span>
            <span>Todos</span>
          </Link>
          <Link to='/dashboard/users' className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>👥</span>
            <span>Users</span>
          </Link>
          <Link to='/dashboard/comments' className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>💬</span>
            <span>Comments</span>
          </Link>
          <Link to='/dashboard/posts' className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>📝</span>
            <span>Posts</span>
          </Link>
          <Link to='/dashboard/albums' className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>🎨</span>
            <span>Albums</span>
          </Link>
          <Link to='/dashboard/photos' className='w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800 transition flex items-center gap-3'>
            <span className='text-xl'>📸</span>
            <span>Photos</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className='px-4 py-4 border-t border-gray-800'>
          <Link to='/' className='w-full px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition'>
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm border-b border-gray-200'>
          <div className='max-w-full mx-auto px-8 py-4 flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-gray-900'>Dashboard Content</h1>
            <div className='flex items-center gap-4'>
              <input 
                type='text' 
                placeholder='Search...' 
                className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
              <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>
                U
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <Outlet className='flex-1 overflow-auto p-8'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full'>
            <p className='text-gray-500 text-center py-16'>
              Select a menu item to view content
            </p>
          </div>
        </Outlet>
      </div>
    </div>
  )
}

export default DashboardLayout
