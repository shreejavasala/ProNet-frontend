import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/authApi'

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error(`Registration failed: ${error.message}`);
      alert(error.response?.data?.message)
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-80'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
        <form 
          onSubmit={handleRegister}
          className='flex flex-col gap-3'>
          <input 
            type="text"
            name='name'
            placeholder='Name'
            className='border p-2 rounded' 
            onChange={handleChange}
            required
          />
          <input 
            type="email"
            name='email'
            placeholder='Email'
            className='border p-2 rounded' 
            onChange={handleChange}
            required
          />
          <input 
            type="password"
            name='password'
            placeholder='Password'
            className='border p-2 rounded' 
            onChange={handleChange}
            required
          />
          <button 
            type='submit'
            className='bg-blue-500 text-white rounded hover:bg:blue-600 p-2 cursor-pointer'>
              Register
          </button>
        </form>
        <p className='text-center mt-4 text-sm'>
          Already have an account?{" "}
          <span 
            className='text-blue-600 cursor-pointer'
            onClick={() => navigate('/login')}>
              Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage