import { useSelector } from 'react-redux';

import { setCategoryIndex } from '../../redux/filterSlice/filterSlice';
import { categorySelector } from '../../redux/filterSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/Button/Button';
import styles from './Categories.module.scss';

const categories: string[] = ['Все', 'Черный', 'Зеленый', 'Травяной'];

const Categories = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(categorySelector);

  const onClickCategory = (category: number) => {
    dispatch(setCategoryIndex(category));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((name, id) => (
          <li key={name}>
            <Button
              active={category === id}
              className={styles.marginButton}
              onClick={() => onClickCategory(id)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
