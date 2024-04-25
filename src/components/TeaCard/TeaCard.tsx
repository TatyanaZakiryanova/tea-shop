import { useState } from 'react';
import { addItem } from '../../redux/cartSlice/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Link } from 'react-router-dom';
import { TeaProps } from './types';
import { CartItem } from '../../redux/cartSlice/types';

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

  const dispatch = useAppDispatch();

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
  };

  const selectAddedCartItem = (id: string, weight: number) =>
    useAppSelector((state) =>
      state.cartReducer.items.find((obj) => obj.id === id && obj.weight === weight),
    );

  const addedCartItem = selectAddedCartItem(id, weight[activeWeight]);
  const addedValue = addedCartItem ? `In cart: ${addedCartItem.count}` : `Add to cart`;

  return (
    <>
      <div className="card">
        <Link key={id} to={`/tea/${id}`}>
          <img className="card-image" src={imageUrl} title="Show description" />
        </Link>
        <h3 className="card-title">{title}</h3>
        <div className="card-inform">
          <h4 className="tea-price">{price} &#8381;</h4>
          <p>per 100 grams</p>
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
            {addedValue}
          </button>
        </div>
      </div>
    </>
  );
};
