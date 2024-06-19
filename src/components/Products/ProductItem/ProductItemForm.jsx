import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (amount < 1 || amount > 20) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amount);
  };

  const addNumberHandler = () => {
    setAmount((prevAmount) => {
      const newAmount = prevAmount + 1;
      return newAmount > 20 ? 20 : newAmount;
    });
  };

  const removeNumberHandler = () => {
    setAmount((prevAmount) => {
      const newAmount = prevAmount - 1;
      return newAmount < 1 ? 1 : newAmount;
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.actions}>
        <div className={classes.addrem} onClick={removeNumberHandler}>
          −
        </div>
        <div className={classes.amount}>{amount}</div>
        <div className={classes.addrem} onClick={addNumberHandler}>
          +
        </div>
        <button type="submit" className={classes.addButton}>
          Add to Cart
        </button>
      </div>
      {!amountIsValid && <p>Please enter a valid amount (1-20).</p>}
    </form>
  );
};

ProductItemForm.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItemForm;
