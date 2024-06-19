import { useContext} from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <Link to="/">
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Go back Home
        </button>
      </Link>
      {hasItems && <button className={classes.button}>Order</button>}
    </div>
  );

  const cartContent = (
    <div className={classes.cart}>
      {cartItems}
      {hasItems ? (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      ) : (
        <div className={classes.total}>
          <span>No Product found in Cart</span>
        </div>
      )}

      {hasItems && modalActions}
    </div>
  );

  return <div>{cartContent}</div>;
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
