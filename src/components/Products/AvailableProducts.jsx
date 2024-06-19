// src/components/Products/AvailableProducts.jsx

import classes from "./AvailableProducts.module.css";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import ProductDetails from "./ProductItem/ProductDetails";
import Modal from "../UI/Modal";
import { fetchProducts } from "../../utils/api";

const AvailableProducts = () => {
  const apiurl = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const loadedProducts = await fetchProducts(apiurl);
        setProducts(loadedProducts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    getProducts();
  }, [apiurl]);

  if (isLoading) {
    return (
      <section className={classes.ProductsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p
          className={classes.ProductsError}
        >{`${httpError}. Please check your internet connection`}</p>
      </section>
    );
  }

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModalHandler = () => {
    setSelectedProduct(null);
  };

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
      onClick={() => showProductDetails(product)}
    />
  ));

  return (
    <section className={classes.products}>
      {selectedProduct && (
        <Modal onClose={closeModalHandler}>
          <ProductDetails
            product={selectedProduct}
            onClose={closeModalHandler}
          />
        </Modal>
      )}
      <div className={classes.grid}>{productsList}</div>
    </section>
  );
};

export default AvailableProducts;
