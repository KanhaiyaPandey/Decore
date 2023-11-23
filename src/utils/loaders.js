import { customFetch } from '../utils/helper';
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