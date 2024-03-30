import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Sort } from './components/Sort/Sort';
import { TeaCard } from './components/TeaCard/TeaCard';

import teas from './assets/tea.json';

export type TeaProps = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  weight: number[];
  price: number;
};

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content-top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content-title">Tea</h2>
          <div className="content-items">
            {teas.map((obj) => (
              <li key={obj.id}>
                <TeaCard {...obj} />
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
