import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/postApi';
import PostCard from '../components/PostCard'
import Loader from '../components/Loader'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res.posts);
    } catch (error) {
      console.log(`Error fetching posts: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if(loading) {
    return <Loader text='Loading...' />
  }

  return (
    <div className='flex flex-col items-center bg-white min-h-screen py-10 p-5 px-4 sm:px-5'>
      {posts.length > 0 
        ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-8xl mt-15'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} refreshPosts={fetchPosts}/>))
            }
        </div>
        ) : (
          <p className='text-gray-400'>No posts yet. Be the first to post!</p>
        )}
    </div>
    )}

export default HomePage