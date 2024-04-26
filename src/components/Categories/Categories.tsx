import { setCategoryIndex } from '../../redux/filterSlice/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const Categories = (): JSX.Element => {
  const categories: string[] = ['All', 'Black', 'Green', 'Herbal'];

  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filterReducer.categoryIndex);

  const onClickCategory = (category: number) => {
    dispatch(setCategoryIndex(category));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((name, id) => (
          <li key={id}>
            <button
              className={category === id ? 'active-button' : ''}
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
