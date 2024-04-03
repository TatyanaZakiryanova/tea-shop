import { useState } from 'react';
import { SortName } from '../../redux/filterSlice';
import { PiSortAscendingLight } from 'react-icons/pi';

export const Sort = ({
  value,
  onChangeSort,
}: {
  value: SortName;
  onChangeSort: (i: SortName) => void;
}): JSX.Element => {
  const [activeSort, setActiveSort] = useState<boolean>(false);
  const sort: Array<SortName> = [
    {
      name: 'Title',
      sortParam: 'title',
    },
    { name: 'Price', sortParam: 'price' },
    {
      name: 'Rating ',
      sortParam: 'rating',
    },
  ];

  const onClickSort = (val: SortName) => {
    onChangeSort(val), setActiveSort(false);
  };

  return (
    <div className="sort">
      <div className="sort-label">
        <PiSortAscendingLight className="sort-icon" />
        <h2>
          Sort by: <span onClick={() => setActiveSort(!activeSort)}>{value.name}</span>
        </h2>
      </div>
      {activeSort && (
        <div className="sort-popup">
          <ul>
            {sort.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickSort(obj)}
                className={value.sortParam === obj.sortParam ? 'active' : ''}
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
