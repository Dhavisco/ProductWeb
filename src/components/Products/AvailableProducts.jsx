import classes from './AvailableProducts.module.css';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem/ProductItem';
import ProductDetails from './ProductItem/ProductDetails';
import Modal from '../UI/Modal';
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];



const AvailableProducts = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");

        if(!response.ok){
          throw new Error ('Something went wrong')
        }


    const responseData = await response.json();

    const loadedProducts = responseData.products.map((product) => ({
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      image:product.thumbnail,
    }));

    setProducts(loadedProducts);
    setIsloading(false)

    };
    
      fetchProducts().catch((error) =>{
        setIsloading(false);
        setHttpError(error.message);
      });

  }, []);


  if (isLoading){
    return (
    <section className={classes.ProductsLoading}>
<p>Loading...</p>
    </section>
  )
  }

  if (httpError){
    return(
      <section>
        <p className={classes.ProductsError}>{`${httpError}. Please check your internet connection`}</p>
      </section>
    )
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
