import { useState } from 'react';

export const Categories = (): JSX.Element => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categories: string[] = ['All', 'Black', 'Green'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li key={index}>
            <button
              className={activeCategoryIndex === index ? 'active-button' : ''}
              onClick={() => setActiveCategoryIndex(index)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
