import { customFetch } from '../utils/helper';
const url = '/products?featured=true';
const allProductUrl = "/products";

export const Landingloader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

export const SingleProductLoader = async ({params}) =>{
    const response = await customFetch(`/products/${params.id}`);
    const product = response.data.data;
    return ({product});
}

export const ProductsLoader = async () =>{
    const response= await customFetch(allProductUrl);
    const products = response.data.data;
    const meta = response.data.meta;
    console.log(meta);
    return {products, meta};
}