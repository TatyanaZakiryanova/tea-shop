import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header-logo">
            <img />
            <div className="header-title">
              <h1>Tea Shop</h1>
            </div>
          </div>
        </Link>
        <div className="cart-button">
          <Link to="cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};
