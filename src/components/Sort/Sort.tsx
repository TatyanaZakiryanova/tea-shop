import { useState } from 'react';
import { SortName, setSortParam } from '../../redux/filterSlice';
import { PiSortAscendingLight } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const sort: Array<SortName> = [
  {
    name: 'Title',
    sortParam: 'title',
  },
  { name: 'Price ↓', sortParam: 'price' },
  { name: 'Price ↑', sortParam: 'price' },
  {
    name: 'Rating ↓ ',
    sortParam: 'rating',
  },
  {
    name: 'Rating ↑ ',
    sortParam: 'rating',
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
