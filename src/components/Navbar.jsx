import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  }
  
  return (
    <nav className='bg-gray-800 text-white shadow-lg shadow-white-500/50 p-6 px-4 sm:px-5 md:px-10 flex justify-between items-center w-full fixed'>
      <h1
        className='text-xl font-bold cursor-pointer'
        onClick={() => navigate('/home')}>
          ProNet
      </h1>
      <div className='flex justify-start items-center gap-6'>
        <button
          className='cursor-pointer' 
          onClick={() => navigate('/home')}>
            Feed
        </button>
        <button 
          className='cursor-pointer'
          onClick={() => navigate('/create')}>
            Create Post
        </button>
        <button 
          className='cursor-pointer'
          onClick={() => navigate('/profile')}>
            Profile
        </button>

        <span className='text-gray-300'>|</span>
        <span className='font-medium'>{user ? 'Hey! ': ''} {user?.name?.split(' ')[0] || 'Guest'}</span>
        {user && <button 
          className='bg-red-500 px-3 py-1 rounded hover:bg-red-600'
          onClick={handleLogout}>
            Logout
          </button>
        }
      </div>
    </nav>
  )
}

export default Navbar