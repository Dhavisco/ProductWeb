import { useContext } from 'react';
import PropTypes from 'prop-types'

import ProductItemForm from './ProductItemForm';
import classes from "./ProductItem.module.css";
import CartContext from '../../../store/cart-context';


const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₦${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductItem;

