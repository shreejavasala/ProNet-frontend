import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(credentials);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      console.error(`Login failed: ${error.message}`);
      alert(error.response?.data?.message || 'Invalid credentials!'); 
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-80'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <form 
          onSubmit={handleLogin}
          className='flex flex-col gap-3'>
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
              Login
          </button>
        </form>
        <p className='text-center mt-4 text-sm'>
          Don't have an account?{" "}
          <span 
            className='text-blue-600 cursor-pointer'
            onClick={() => navigate('/register')}>
              Register
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginPage