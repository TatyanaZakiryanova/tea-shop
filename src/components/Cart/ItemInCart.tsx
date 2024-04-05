import { CartItem } from '../../redux/cartSlice';

const ItemInCart: React.FC<CartItem> = ({
  id,
  imageUrl,
  title,
  price,
  type,
  rating,
  weight,
  count,
}) => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={imageUrl} />
        <h3 className="card-title">{title}</h3>
        <div className="card-inform">
          <h4 className="tea-price">{price} &#8381;</h4>
          <h4 className="tea-type">Type: {type} tea</h4>
          <h4 className="tea-rating">Rating: {rating}</h4>
          <div className="weight-selector">
            <h4 className="tea-weight">Weight: {weight} g</h4>
            <h4 className="tea-amount">Amount: {count} </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemInCart;
