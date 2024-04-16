import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import styles from './SingleTea.module.scss';
import { TeaProps } from '../TeaCard/TeaCard';
import { CartItem, addItem } from '../../redux/cartSlice';
import { useAppDispatch } from '../../redux/store';
import { FaCartShopping } from 'react-icons/fa6';

const TeaPage = () => {
  const [tea, setTea] = useState<TeaProps>();
  const [activeWeight, setActiveWeight] = useState<number>(0);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('https://6608a863a2a5dd477b14ab61.mockapi.io/items/' + id);
        setTea(data);
      } catch (error) {
        alert('Loading error');
        navigate('/');
      }
    }

    fetchData();
  }, []);

  if (!tea) {
    return <Spinner />;
  }

  const onClickAddItem = () => {
    const item: CartItem = {
      id: tea.id,
      imageUrl: tea.imageUrl,
      title: tea.title,
      type: tea.type,
      weight: tea.weight[activeWeight],
      price: tea.price,
      rating: tea.rating,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.wrapper}>
      <img src={tea.imageUrl} className={styles.img} />
      <div className={styles.inform}>
        <h2 className={styles.title}>{tea.title}</h2>
        <h4 className={styles.price}>
          {tea.price} ₽ <span>per 100 grams</span>
        </h4>
        <p>The price of tea will be calculated depending on the selected weight.</p>
        <h4 className={styles.type}>Type: {tea.type} tea</h4>
        <ul className={styles.weight}>
          {tea.weight.map((grams, index) => (
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
        <button onClick={onClickAddItem}>
          <FaCartShopping className={styles.icon} />
          Add to cart
        </button>
        <div>
          <Link to="/" className={styles.back}>
            <button className={styles.backbutton}>← Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeaPage;
