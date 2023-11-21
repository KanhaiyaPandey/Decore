import { customFetch } from '../utils/helper';
const url = '/products?featured=true';

export const Landingloader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};