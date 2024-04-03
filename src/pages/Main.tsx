import { useState, useEffect } from 'react';
import { TeaProps } from '../App';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCategoryIndex } from '../redux/filterSlice';

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const categoryIndex = useAppSelector((state) => state.filterReducer.categoryIndex);

  const onSelectCategory = (index: number) => {
    dispatch(setCategoryIndex(index));
  };

  const [items, setItems] = useState<TeaProps[]>([]);

  useEffect(() => {
    fetch(
      `https://6608a863a2a5dd477b14ab61.mockapi.io/items?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }`,
    )
      .then((mockData) => {
        return mockData.json();
      })
      .then((json) => {
        setItems(json);
      });
  });

  return (
    <div className="wrapper">
      <div className="content">
        <div className="content-top">
          <Categories value={categoryIndex} onSelectCategory={onSelectCategory} />
          <Sort />
        </div>
        <div className="content-items">
          <>
            {items.map((obj) => (
              <li key={obj.id}>
                <TeaCard {...obj} />
              </li>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Main;
