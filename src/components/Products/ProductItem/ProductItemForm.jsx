import { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 20
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label=''
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '20',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  )
};

ProductItemForm.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductItemForm;
