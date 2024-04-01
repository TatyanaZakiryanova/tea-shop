import React, { useState } from 'react';

export const Sort = () => {
  const [activeSort, setActiveSort] = useState<boolean>(false);
  const [selectSort, setSelectSort] = useState<number>(0);
  const sort: string[] = ['Title', 'Price', 'Type'];

  const selectedValue: string = sort[selectSort];

  const onClickSort = (i: number) => {
    setSelectSort(i), setActiveSort(false);
  };

  return (
    <div className="sort">
      <div className="sort-label">
        <h2>
          Sort by: <span onClick={() => setActiveSort(!activeSort)}>{selectedValue}</span>
        </h2>
      </div>
      {activeSort && (
        <div className="sort-popup">
          <ul>
            {sort.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickSort(i)}
                className={selectSort === i ? 'active' : ''}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
