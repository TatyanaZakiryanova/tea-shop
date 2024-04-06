import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="wrapper">
      <div className="empty-cart">
        <h1>
          <GiShoppingCart className="empty-cart-icon" />
          <br />
          Cart is empty
        </h1>
        <br />
        <Link to="/" className="back-link">
          <button className="empty-cart-back">← Back</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
