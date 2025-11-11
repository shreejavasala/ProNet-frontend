import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postApi';
import PostCard from '../components/PostCard'
import { Edit, Loader } from 'lucide-react'

const ProfilePage = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await getAllPosts();
        const filteredPosts = res.posts.filter(
          (post) => post.user._id === user._id
        );
        setUserPosts(filteredPosts);
      } catch (error) {
        console.error(`Error fetching user posts: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [user._id]);

  
  if(loading) {
    <Loader text='Loading profile...' />
  }
  return (
    <div className='flex flex-col items-center bg-white text-white min-h-screen py-10 p-4 px-5 sm:p-5 md:p-5 lg:p-5'>
      <div className='bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-lg mb-12 text-center mt-25'>
        <button 
          className='absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition cursor-pointer'
          onClick={() => alert('Edit Profile feature coming soon!')}>
            <Edit size={18} />
        </button>       

        <div className='flex flex-col items-center gap-3'>
          <div className='w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold'>
            {user?.name?.charAt(0).toUpperCase()}
          </div>
            <h2 className='text-2xl font-bold mb-2'>{user?.name}</h2>
            <p className='text-gray-400 mb-2'>{user?.email}</p>
            <p className='text-sm text-gray-500'>Member since 2025</p>
          </div>
        </div>
       
        <div className='w-full max-w-7xl p-5 px-3 sm:px-4 md:px-5 lg:px-6'>
          <h3 className='text-xl font-extrabold mb-6 text-center text-gray-900'>Your Posts</h3>

          {userPosts.length > 0 
            ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {userPosts.map((post) => (
                < PostCard key={post._id} post={post} />
                ))}
              </div>
          ) : (
              <p className='text-gray-400'>
                You haven't posted anything yet!
              </p>
            )}
        </div>
      </div>
  )
}

export default ProfilePage