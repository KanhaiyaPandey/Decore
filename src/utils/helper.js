import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
    const rupeeAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
    }).format((price / 20).toFixed(2));
    return rupeeAmount;
  };