import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const productService = {
  getAllProducts: () => api.get('/products?limit=100'),
  getProduct: (id: number) => api.get(`/products/${id}`),
  getProductsByCategory: (category: string) => api.get(`/products/category/${category}`),
  searchProducts: (query: string) => api.get(`/products/search?q=${query}`),
  getCategories: () => api.get('/products/categories'),
};