import React from 'react'

const DashboardUsers = () => {
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
            {[1, 2, 3, 4, 5].map((user) => (
              <tr key={user} className='hover:bg-gray-50 transition'>
                <td className='px-6 py-4'>
                  <p className='text-gray-900 font-medium'>User Name {user}</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>user{user}@email.com</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>+1-555-000-{user}</p>
                </td>
                <td className='px-6 py-4'>
                  <p className='text-gray-600'>Company Inc</p>
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
