import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="header-link">
          <div className="header-title">
            <h1>Tea Garden</h1>
            <p>Loose leaf tea with exquisite taste</p>
          </div>
        </Link>
        <button className="cart-button">
          <Link to="cart" className="cart-link">
            Cart
          </Link>
        </button>
      </div>
    </div>
  );
};
