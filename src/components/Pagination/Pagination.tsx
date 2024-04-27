import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setCurrentPage } from '../../redux/filterSlice/filterSlice';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.filterReducer.currentPage);
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
