import axios from 'axios';

const PRODUCTS_API_URL = 'http://localhost:5000/api/products'; // Update the URL if needed

export const fetchProducts = async () => {
  try {
    const response = await axios.get(PRODUCTS_API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};