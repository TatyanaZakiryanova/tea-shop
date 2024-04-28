import { useState } from 'react';
import { setSortParam } from '../../redux/filterSlice/filterSlice';
import { PiSortAscendingLight } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { SortEnum, SortName } from '../../redux/filterSlice/types';

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

export const Sort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sortobj = useAppSelector((state) => state.filterReducer.sort);

  const [activeSort, setActiveSort] = useState<boolean>(false);

  const onClickSort = (obj: SortName) => {
    dispatch(setSortParam(obj)), setActiveSort(false);
  };

  return (
    <div className="sort">
      <div className="sort-label">
        <PiSortAscendingLight className="sort-icon" />
        <h2>
          Sort by: <span onClick={() => setActiveSort(!activeSort)}>{sortobj.name}</span>
        </h2>
      </div>
      {activeSort && (
        <div className="sort-popup">
          <ul>
            {sort.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickSort(obj)}
                className={sortobj.sortParam === obj.sortParam ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
