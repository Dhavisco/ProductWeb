import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classes from "./QuantityInput.module.css";

const QuantityInput = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(props.input.defaultValue || 1);

  const incrementHandler = () => {
    setValue((prevValue) => {
      const newValue = Math.min(prevValue + 1, props.input.max);
      return newValue;
    });
  };

  const decrementHandler = () => {
    setValue((prevValue) => {
      const newValue = Math.max(prevValue - 1, props.input.min);
      return newValue;
    });
  };

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.value = value;
    }
  }, [value, ref]);

  return (
    <div className={classes.quantityInput}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className={classes.inputContainer}>
        <button
          type="button"
          onClick={decrementHandler}
          className={classes.button}
        >
          -
        </button>
        <input ref={ref} {...props.input} value={value} readOnly />
        <button
          type="button"
          onClick={incrementHandler}
          className={classes.button}
        >
          +
        </button>
      </div>
    </div>
  );
});

QuantityInput.displayName = "QuantityInput";

QuantityInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
  }).isRequired,
};

export default QuantityInput;
