import classes from './CartItem.module.css';
import PropTypes from 'prop-types';

const CartItem = (props) => {
  const price = `₦${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <div>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default CartItem;
