import { useState } from 'react';
import { CartItem, addItem } from '../../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export type TeaProps = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number[];
  price: number;
};

export const TeaCard: React.FC<TeaProps> = ({
  id,
  imageUrl,
  title,
  type,
  weight,
  price,
  rating,
}) => {
  const [activeWeight, setActiveWeight] = useState<number>(0);

  if (weight[activeWeight] === 200) {
    price *= 2;
  }

  const dispatch = useAppDispatch();

  const [addedToCart, setAddedToCart] = useState<string>('Add to cart');

  const onClickAddItem = () => {
    const item: CartItem = {
      id,
      imageUrl,
      title,
      type,
      weight: weight[activeWeight],
      price,
      rating,
      count: 0,
    };
    dispatch(addItem(item));
    setAddedToCart('Added to cart');
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card-image" src={imageUrl} />
        <h3 className="card-title">{title}</h3>
        <div className="card-inform">
          <h4 className="tea-price">{price} &#8381;</h4>
          <h4 className="tea-type">Type: {type} tea</h4>
          <h4 className="tea-rating">Rating: {rating}</h4>
          <div className="weight-selector">
            <h4 className="tea-weight">Weight:</h4>
            <ul>
              {weight.map((grams, index) => (
                <li key={grams}>
                  <button
                    onClick={() => setActiveWeight(index)}
                    className={activeWeight === index ? 'active-button' : ''}
                  >
                    {grams} g
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={onClickAddItem} className="cart-add">
            {addedToCart}
          </button>
        </div>
      </div>
    </div>
  );
};
