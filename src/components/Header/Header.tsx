import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="header-link">
          <div className="header-title">
            <h1>Tea Shop</h1>
            <p>loose leaf tea with exquisite taste</p>
          </div>
        </Link>
        <button className="cart-button">
          <Link to="cart" className="cart-link">
            <FaCartShopping className="cart-icon" /> 0
          </Link>
        </button>
      </div>
    </div>
  );
};
