const Cart = (): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <div className="cart-items">
          <div className="cart-item">Item</div>
          <div className="items-number">Number</div>
          <div className="items-cost">Cost</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
