import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold text-gray-900 mb-8'>Contact Us</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-blue-600 mb-6'>Get In Touch</h2>
            <form className='space-y-4'>
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>Email</label>
                <input type='email' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' placeholder='your@email.com' />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold mb-2'>Message</label>
                <textarea className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' rows='5' placeholder='Your message here...'></textarea>
              </div>
              <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200'>
                Send Message
              </button>
            </form>
          </div>

          <div className='space-y-4'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>Email</h3>
              <p className='text-gray-700'>hello@example.com</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>Phone</h3>
              <p className='text-gray-700'>+1 (555) 123-4567</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>Location</h3>
              <p className='text-gray-700'>123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
