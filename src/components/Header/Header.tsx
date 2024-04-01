import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="header-link">
          <div className="header-logo">
            <img />
            <div className="header-title">
              <h1>Tea Shop</h1>
            </div>
          </div>
        </Link>
        <div className="cart-button">
          <Link to="cart" className="cart-link">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
