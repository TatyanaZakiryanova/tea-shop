import { useSelector } from 'react-redux';
import { setCategoryIndex } from '../../redux/filterSlice/filterSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './Categories.module.scss';
import { categorySelector } from '../../redux/filterSlice/selectors';

const categories: string[] = ['All', 'Black', 'Green', 'Herbal'];

export const Categories = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const category = useSelector(categorySelector);

  const onClickCategory = (category: number) => {
    dispatch(setCategoryIndex(category));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((name, id) => (
          <li key={id}>
            <button
              className={category === id ? styles.active : ''}
              onClick={() => onClickCategory(id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
