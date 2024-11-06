const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://munamii-api.onrender.com/api'
  : 'http://localhost:5000/api';

export const endpoints = {
  cupcakes: `${API_URL}/cupcakes`,
  weddingCakes: `${API_URL}/weddingcakes`,
  shoppingBag: `${API_URL}/shoppingbag`
};