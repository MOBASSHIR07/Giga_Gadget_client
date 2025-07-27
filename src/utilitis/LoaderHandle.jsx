
import { baseURL } from "./Url.js";



// product of brands fatch from here
export const productOfBrands = async ({ params }) => {
    // params => brandName
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    const filterData = data?.filter(item => item.brandName.toLowerCase() === params.brandName.toLowerCase())
    return filterData;
}

// product details fatch from here
export const oneProductLoader = async ({ params }) => {
    // params => id
    const response = await fetch(`${baseURL}/singleproduct/${params.id}`);
    const data = await response.json();
    return data;
}
//brand loader

export const brandLoader = async ({ params }) => {
  const response = await fetch(`${baseURL}/products/category/${params.brandName}`);

  if (!response.ok) {
    throw new Error("Failed to fetch brand products");
  }

  const data = await response.json();
  return data;
};



// product of Cart by user fatch from here
export const productsOfCart = async () => {
    const responseProduct = await fetch(`${baseURL}/products`);
    const dataProduct = await responseProduct.json();
    const responseProductCart = await fetch(`${baseURL}/getallproducts`);
    const dataProductCart = await responseProductCart.json();

    const data = {
        products: dataProduct,
        productsCart: dataProductCart
    }

    return data;
}