import axiosInstance from './axios'

export const registerUser = async (userData) => {
  const res = await axiosInstance.post('/users/register', userData);
  return res.data;
};

export const loginUser = async (credentials) => {
  const res = await axiosInstance.post('/users/login', credentials);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axiosInstance.post('/users/logout');
  return res.data;
};