import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setCurrentPage } from '../../redux/filterSlice/filterSlice';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { currentPageSelector } from '../../redux/filterSlice/selectors';
import { useSelector } from 'react-redux';

const Pagination = () => {
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useAppDispatch();

  const onClickPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel={<IoMdArrowDropright />}
      onPageChange={(event) => onClickPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      previousLabel={<IoMdArrowDropleft />}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
