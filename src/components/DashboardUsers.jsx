// import { useState, useEffect } from "react"
import useFetch from "./useFetch"

const DashboardUsers = () => {
  const {data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  if(loading) return <p>Loading users...</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-2'>Users</h2>
        <p className='text-gray-600'>View and manage all users</p>
      </div>

      <div className='bg-white border border-gray-200 rounded-lg overflow-hidden'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Name</th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Email</th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Phone</th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Company</th>
              <th className='px-6 py-4 text-left text-sm font-semibold text-gray-900'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {users.map((usr) => (
              <tr key={usr.id} className='hover:bg-gray-50 transition'>
                <td className='px-6 py-4'>
                  <p className='text-gray-900 font-medium'>Name {usr.name}</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>{usr.email}</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>{usr.phone}</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>{usr.company.name}</p>
                </td>
                <td className='px-6 py-4'>
                  <button className='px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition text-sm font-medium'>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardUsers
