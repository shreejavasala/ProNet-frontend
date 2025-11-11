import React from 'react'

const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 text-white'>
      <div className='flex flex-col items-center'>
        <div className='w-12 h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin mb-4'></div>
        <p className='text-gray-300 text-lg font-medium'>{text}</p>
      </div>
    </div>
  )
}

export default Loader