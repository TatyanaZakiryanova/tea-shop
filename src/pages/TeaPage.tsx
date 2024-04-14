import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../components/Spinner/Spinner';
import styles from './TeaPage.module.scss';

const TeaPage = () => {
  const [tea, setTea] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    type: string;
    rating: number;
    weight: number[];
    description: string;
  }>();

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

  return (
    <div className={styles.wrapper}>
      <img src={tea.imageUrl} className={styles.img} />
      <div className={styles.inform}>
        <h2 className={styles.title}>{tea.title}</h2>
        <h4 className={styles.price}>{tea.price} ₽ per 100 grams</h4>
        <p>The price of tea will be calculated depending on the selected weight.</p>
        <h4 className={styles.type}>Type: {tea.type} tea</h4>
        <div className={styles.back}>
          <Link to="/">
            <button>Back to the main page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeaPage;
