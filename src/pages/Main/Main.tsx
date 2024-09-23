import { useEffect } from 'react';
import styles from './Main.module.scss';
import { Categories } from '../../components/Categories/Categories';
import ItemsNotFound from '../../components/ItemsNotFound/ItemsNotFound';
import Pagination from '../../components/Pagination/Pagination';
import { Sort } from '../../components/Sort/Sort';
import Skeleton from '../../components/TeaCard/Skeleton';
import { TeaCard } from '../../components/TeaCard/TeaCard';
import { useAppDispatch } from '../../redux/store';
import { fetchTeas } from '../../redux/teaSlice/asyncActions';
import { useSelector } from 'react-redux';
import {
  categorySelector,
  currentPageSelector,
  searchValueSelector,
  sortSelector,
} from '../../redux/filterSlice/selectors';
import { itemsSelector, statusSelector } from '../../redux/teaSlice/selectors';

const Main = (): JSX.Element => {
  const sortType = useSelector(sortSelector);
  const categoryIndex = useSelector(categorySelector);
  const searchValue = useSelector(searchValueSelector);
  const currentPage = useSelector(currentPageSelector);
  const items = useSelector(itemsSelector);
  const status = useSelector(statusSelector);

  const dispatch = useAppDispatch();

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

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const teas =
    items.length > 0 ? (
      items.map((obj) => (
        <li key={obj.id}>
          <TeaCard {...obj} />
        </li>
      ))
    ) : (
      <ItemsNotFound />
    );

  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.items}>
        <>
          {status === 'error' ? <ItemsNotFound /> : <>{status === 'loading' ? skeleton : teas}</>}
        </>
      </div>
      <Pagination />
    </>
  );
};

export default Main;
