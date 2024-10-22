import { useSelector } from 'react-redux';

import { setSortParam } from '../../redux/filterSlice/filterSlice';
import { sortSelector } from '../../redux/filterSlice/selectors';
import { SortEnum, SortName } from '../../redux/filterSlice/types';
import { useAppDispatch } from '../../redux/store';
import { Dropdown } from '../UI/Dropdown/Dropdown';

const sort: SortName[] = [
  {
    name: 'Title',
    sortParam: SortEnum.TITLE,
  },
  { name: 'Price ↓', sortParam: SortEnum.PRICE },
  { name: 'Price ↑', sortParam: SortEnum.PRICE },
  {
    name: 'Rating ↓',
    sortParam: SortEnum.RATING,
  },
  {
    name: 'Rating ↑',
    sortParam: SortEnum.RATING,
  },
];

const Sort = () => {
  const dispatch = useAppDispatch();
  const sortName = useSelector(sortSelector);

  const onClickSort = (obj: SortName) => {
    dispatch(setSortParam(obj));
  };

  return (
    <Dropdown label="Sort by" options={sort} currentOption={sortName} handleOption={onClickSort} />
  );
};

export default Sort;
