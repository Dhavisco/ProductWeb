import { useContext} from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Cart = () => {
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
        <button className={classes["button--alt"]}>
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
        <div className={classes.empty}>
          <span>No Product found in Cart</span>
          <Link to="/" className={classes.emppro}>
            <div>Click to Add some products</div>
          </Link>
        </div>
      )}

      {hasItems && modalActions}
    </div>
  );

  return <div>{cartContent}</div>;
};


export default Cart;
