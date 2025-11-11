import React, { useState } from 'react'
import { toggleLike, addComment, editPost, deletePost } from '../api/postApi'
import { Heart, Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import Loader from './Loader';


const PostCard = ({ post, refreshPosts }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newPost, setNewPost] = useState({
    'content': post.content,
    'image': post.image || ''
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  }

  const handleLike = async () => {
    try {
      setLoading(true);
      await toggleLike(post._id);
      refreshPosts();
    } catch (error) {
      console.error(`Error in liking posts: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const handleAddComment = async () => {
    if(!commentText.trim()) return;
    try {
      setLoading(true);
      await addComment(post._id, commentText);
      setCommentText('');
      refreshPosts();
    } catch (error) {
      console.error(`Error in adding comment: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = async () => {
    try {
      setLoading(true);
      await editPost(post._id, newPost);
      setIsEditing(false);
      refreshPosts();
    } catch (error) {
      console.error(`Error in editing post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deletePost(post._id);
      refreshPosts();
    } catch (error) {
      console.error(`Error in deleting post: ${error.message}`);
      setLoading(false);
    }
  }

  return (
    <div className='bg-gray-800 text-white p-6 rounded-lg shadow-md'>
      { loading && <Loader /> }
      <div className='flex items-center justify-between mb-3 overflow-hidden'>
        <h3 className='font-semibold text-lg sm:ml-1 md:ml-2'>{post.user?.name}</h3>
        <span className='text-gray-400 text-sm'>
          { new Date(post.createdAt).toLocaleString() }
        </span>
      </div>

      <hr className='mb-5 text-gray-500'/>
      {isEditing ? (
        <div className='mt-3'>
          <textarea 
            name='content'
            placeholder='content'
            value={newPost.content}
            onChange={handleChange}
            className='w-full bg-gray-700 text-white p-2 rounded overflow-hidden'
          />

          <input 
            type="text"
            name='image'
            placeholder='Image URL'
            value={newPost.image}
            onChange={handleChange}
            className='p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus-ring-2 focus-ring-blue-500'
          />  

          <div className='flex gap-2 my-3'>
            <button 
              onClick={handleEdit}
              className='bg-blue-600 px-3 py-1 rounded hover:bg-blue-700'>
                Save
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className='bg-gray-600 px-3 py-1 rounded hover:bg-gray-700'>
                Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className='mb-3 overflow-hidden px-8 sm:px-2 md:px-1 lg:px-3'>{post.content}</p>
      )}
      
      <div className='flex items-center justify-center'>
        {post.image && (
          <img 
            src={post.image} 
            alt="post" 
            className='h-90 w-90 sm:w-90 sm:h-90 md:w-96 md:h-96 object-cover rounded-lg mb-3 border border-gray-700'
          />
        )}
      </div>

      <div className='flex justify-between text-xs text-gray-400 overflow-hidden mt-4'>

        <div className='flex justify-center items-center'>
          <Heart
            onClick={handleLike}
            className={`cursor-pointer hover:scale-110 transition mr-2 ${
            post.likes.includes(user._id) ? "text-red-500" : "text-gray-400"
            }`}
          />
          <span>{post.likes.length}</span>
        </div>
       
        <div className='flex items-center justify-between'>
          <Edit 
            onClick={() => {
              setNewPost({ content: post.content, image: post.image || '' });
              setIsEditing(true);
            }} 
            className="text-blue-500 cursor-pointer hover:scale-110 transition mr-2" 
          />

          <Trash2 
            onClick={handleDelete}
            className="text-gray-500 cursor-pointer hover:scale-110 transition" 
          />
        </div>
      </div>

      <div className="my-3">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full bg-gray-700 text-white p-2 my-2 rounded"
        />


        <div className='flex justify-between items-center'>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 px-3 py-1 my-2 rounded hover:bg-blue-600">
              Comment
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-700 text-sm">
              {showComments ? (
                  <ChevronUp className="w-5 h-5" />
              ) : (
                  <ChevronDown className="w-5 h-5" />
              )}
          </button>
        </div>
      </div>

      <div className="mt-3 overflow-hidden">
        {showComments && post.comments.map((c, i) => (
          <p key={i} className="text-gray-300 text-sm">
            💬 {c.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostCard