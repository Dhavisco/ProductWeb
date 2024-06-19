import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/product.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Link to='/' className={classes.title}>
          <h1>WebProduct</h1>
        </Link>

        <Link to="/cart" className={classes.cartButton}>
          <HeaderCartButton />
        </Link>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
