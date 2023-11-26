/* eslint-disable no-constant-condition */
import { toast } from 'react-toastify';
import { customFetch } from '../utils/helper';
import { redirect } from 'react-router-dom';
const url = '/products';
const featuredUrl = '/products?featured=true';
// const allProductUrl = "/products";

export const Landingloader = async () => {
  const response = await customFetch(featuredUrl);
  const products = response.data.data;
  return { products };
};

export const SingleProductLoader = async ({params}) =>{
    const response = await customFetch(`/products/${params.id}`);
    const product = response.data.data;
    return ({product});
}

export const ProductsLoader = async ({request }) =>{
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
}

export const checkoutLoader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};


export const orderLoader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warn('You must be logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');

      return null;
    }
  };