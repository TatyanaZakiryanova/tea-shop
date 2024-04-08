import { useEffect } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCategoryIndex } from '../redux/filterSlice';
import { Spinner } from '../components/Spinner/Spinner';
import { fetchTeas } from '../redux/teaSlice';
import { MdOutlineErrorOutline } from 'react-icons/md';

const Main = (): JSX.Element => {
  const sortType = useAppSelector((state) => state.filterReducer.sort);
  const { categoryIndex, searchValue } = useAppSelector((state) => state.filterReducer);
  const { items, status } = useAppSelector((state) => state.teaReducer);

  const dispatch = useAppDispatch();

  const onSelectCategory = (index: number) => {
    dispatch(setCategoryIndex(index));
  };

  const fetchData = async () => {
    const sortBy = sortType.sortParam;
    const order =
      sortType.sortParam === 'title' ||
      ((sortType.sortParam === 'price' || 'rating') && sortType.name.includes('↑'))
        ? 'asc'
        : 'desc';
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
    const search = searchValue;

    dispatch(
      fetchTeas({
        order,
        category,
        search,
        sortBy,
      }),
    );
  };

  useEffect(() => {
    fetchData();
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
            {status === 'error' ? (
              <div className="error-status">
                <MdOutlineErrorOutline className="error-status-icon" />
                <br />
                <p>No items found. Please try again later.</p>
              </div>
            ) : (
              <>
                {status === 'loading' ? (
                  <Spinner />
                ) : (
                  items.map((obj) => (
                    <li key={obj.id}>
                      <TeaCard {...obj} />
                    </li>
                  ))
                )}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Main;
