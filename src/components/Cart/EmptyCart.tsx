import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <>
      <div className="cart-header">
        <h2 className="cart-title">Cart</h2>
      </div>
      <div className="empty-cart">
        <h1>
          <IoCartOutline className="empty-cart-icon" />
          <br />
          Cart is empty
        </h1>
        <br />
        <p>Return to the main page to order items:</p>
        <br />
        <Link to="/" className="back-link">
          <button className="empty-cart-back">Home</button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
