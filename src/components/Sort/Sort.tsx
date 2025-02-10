import { useSelector } from 'react-redux';

import { setSortParam } from '../../redux/filterSlice/filterSlice';
import { sortSelector } from '../../redux/filterSlice/selectors';
import { SortEnum, SortName } from '../../redux/filterSlice/types';
import { useAppDispatch } from '../../redux/store';
import { Dropdown } from '../UI/Dropdown/Dropdown';

const sort: SortName[] = [
  {
    name: 'Название',
    sortParam: SortEnum.TITLE,
  },
  { name: 'Цена ↓', sortParam: SortEnum.PRICE },
  { name: 'Цена ↑', sortParam: SortEnum.PRICE },
  {
    name: 'Рейтинг ↓',
    sortParam: SortEnum.RATING,
  },
  {
    name: 'Рейтинг ↑',
    sortParam: SortEnum.RATING,
  },
];

const Sort = () => {
  const dispatch = useAppDispatch();
  const sortName = useSelector(sortSelector);

  const onClickSort = (obj: SortName) => {
    dispatch(setSortParam(obj));
  };

  return <Dropdown options={sort} currentOption={sortName} handleOption={onClickSort} />;
};

export default Sort;
