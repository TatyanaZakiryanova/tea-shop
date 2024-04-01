import { useState, useEffect } from 'react';
import { TeaProps } from '../App';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { TeaCard } from '../components/TeaCard/TeaCard';

const Main = (): JSX.Element => {
  const [items, setItems] = useState<TeaProps[]>([]);

  useEffect(() => {
    fetch('https://6608a863a2a5dd477b14ab61.mockapi.io/items')
      .then((mockData) => {
        return mockData.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="content-top">
          <Categories />
          <Sort />
        </div>
        <div className="content-items">
          <>
            {items.map((obj) => (
              <li key={obj.id}>
                <TeaCard {...obj} />
              </li>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Main;
