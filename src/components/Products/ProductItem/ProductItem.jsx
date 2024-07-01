import PropTypes from 'prop-types'
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {

  const price = `₦${props.price.toFixed(2)}`;
   const maxDescriptionLength = 100; // Maximum number of characters for the description

   const reduceDescription = (description) => {
     if (description.length > maxDescriptionLength) {
       return description.substring(0, maxDescriptionLength) + "...";
     }
     return description;
   };

  return (
    <li className={classes.product} onClick={props.onClick}>
      <div className={classes.productContent}>
        <div>
          <img
            src={props.image}
            alt=""
          />
        </div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.description}>{reduceDescription(props.description)}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes.addcart}>
          Add to Cart
        </button>
        <div className={classes.v_pro}>View Product</div>
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

