import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api/postApi';

const CreatePostPage = () => {
  const [postData, setPostData] = useState({
    content: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createPost(postData);
      console.log('Post created:', res.post);
      alert('Post created successfully');
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.message || 'Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-white-700'>
      <div className='bg-gray-800  p-8 rounded-xl shadow-lg w-full max-w-md text-white'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>
          Create a New Post
        </h2>

        <form 
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
        >
          <textarea 
            name='content'
            placeholder="what's on your mind today?"
            rows='8'
            value={postData.content}
            onChange={handleChange}
            className='p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus-ring-2 focus:ring-blue-500'
            required
          />
          
          <input 
            type="text"
            name='image'
            placeholder='Image URL'
            disabled={loading} 
            value={postData.image}
            onChange={handleChange}
            className='p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus-ring-2 focus-ring-blue-500'
          />

          <button 
            type='submit'
            disabled={loading}
            className='bg-blue-600 hover:bg-blue700 py-2 rounded font-semibold transition duration-300 disabled:bg-gray-500'>
              {loading ? 'Posting...': 'Post'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePostPage