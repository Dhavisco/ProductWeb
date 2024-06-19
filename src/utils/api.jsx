// src/utils/api.js

export const fetchProducts = async (apiurl) => {
  const response = await fetch(apiurl);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const responseData = await response.json();

  const loadedProducts = responseData.products.map((product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.thumbnail,
  }));

  return loadedProducts;
};
