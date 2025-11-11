import axiosInstance from "./axios";

export const getAllPosts = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axiosInstance.post('/posts', postData);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axiosInstance.get(`posts/${id}`);
  return res.data;
};

export const editPost = async (postId, postData) => {
  const res = await axiosInstance.put(`/posts/${postId}`, postData );
  return res.data;
}

export const deletePost = async (postId) => {
  const res = await axiosInstance.delete(`/posts/${postId}`);
  return res.data;
}

export const toggleLike = async (postId) => {
  const res = await axiosInstance.put(`/posts/${postId}/like`);
  return res.data;
}

export const addComment = async (postId, text) => {
  const res = await axiosInstance.post(`posts/${postId}/comment`, {text} );
  return res.data;
}