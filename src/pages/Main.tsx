import { useState, useEffect, useContext } from 'react';
import { SearchContext, TeaProps } from '../App';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCategoryIndex } from '../redux/filterSlice';
import axios from 'axios';

const Main = (): JSX.Element => {
  const { searchValue } = useContext(SearchContext);

  const sortType = useAppSelector((state) => state.filterReducer.sort);
  const categoryIndex = useAppSelector((state) => state.filterReducer.categoryIndex);

  const dispatch = useAppDispatch();

  const onSelectCategory = (index: number) => {
    dispatch(setCategoryIndex(index));
  };

  const [items, setItems] = useState<TeaProps[]>([]);

  useEffect(() => {
    const order = sortType.sortParam === 'title' ? 'asc' : 'desc';
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const search = searchValue;

    axios
      .get(
        `https://6608a863a2a5dd477b14ab61.mockapi.io/items?${category}&sortBy=${sortType.sortParam}&order=${order}&search=${search}`,
      )
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [categoryIndex, sortType, searchValue]);

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
