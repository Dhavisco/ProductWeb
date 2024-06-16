// import { useState } from "react";
import { useContext } from "react";
import classes from "./ProductDetails.module.css";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../../store/cart-context";

const ProductDetails = (props) => {
  // const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);

  const price = `₦${props.product.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // Logic for adding to cart
    cartCtx.addItem({
      id: props.product.id,
      name: props.product.name,
      amount: amount,
      price: props.product.price,
      image: props.product.image
    });
  };

  // const quantityChangeHandler = (event) => {
  //   setQuantity(event.target.value);
  // };

  return (
    <div className={classes.details}>
      <div>
        <img src={props.product.image} alt=""/>
      </div>
      <div className={classes.name}>{props.product.name}</div>
      <p>{props.product.description}</p>
      <div className={classes.price}>{price}</div>
      <div className={classes.actions}>
      <ProductItemForm onAddToCart={addToCartHandler}/>
      </div>
      <button className={classes.closeButton} onClick={props.onClose}>
        Close
      </button>
    </div>
  );
};

export default ProductDetails;
