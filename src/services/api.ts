import axios from 'axios';
import { LoginCredentials, LoginResponse, User, UsersResponse } from '../types/user';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data.token;
};

export const getUsers = async (page: number): Promise<UsersResponse> => {
  const response = await api.get<UsersResponse>(`/users?page=${page}`);
  return response.data;
};

export const updateUser = async (id: number, userData: Partial<User>): Promise<User> => {
  const response = await api.put<User>(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};