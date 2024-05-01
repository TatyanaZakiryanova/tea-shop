import { useEffect, useState } from 'react';
import { SingleTea } from '../components/SingleTea/types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useFetchTea = (id: string | undefined) => {
  const [tea, setTea] = useState<SingleTea | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://6608a863a2a5dd477b14ab61.mockapi.io/items/' + id);
        setTea(data);
      } catch (error) {
        alert('Loading error');
        navigate('/');
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  return { tea };
};

export default useFetchTea;
