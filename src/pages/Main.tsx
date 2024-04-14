import { useEffect } from 'react';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setCategoryIndex, setCurrentPage } from '../redux/filterSlice';
import { fetchTeas } from '../redux/teaSlice';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Skeleton from '../components/TeaCard/Skeleton';
import Pagination from '../components/Pagination/Pagination';

const Main = (): JSX.Element => {
  const sortType = useAppSelector((state) => state.filterReducer.sort);
  const { categoryIndex, searchValue, currentPage } = useAppSelector(
    (state) => state.filterReducer,
  );
  const { items, status } = useAppSelector((state) => state.teaReducer);

  const dispatch = useAppDispatch();

  const onSelectCategory = (index: number) => {
    dispatch(setCategoryIndex(index));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
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
        currentPage: String(currentPage),
      }),
    );
  };

  useEffect(() => {
    fetchData();
  }, [categoryIndex, sortType, searchValue, currentPage]);

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
                {status === 'loading'
                  ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                  : items.map((obj) => (
                      <li key={obj.id}>
                        <TeaCard {...obj} />
                      </li>
                    ))}
              </>
            )}
          </>
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Main;
