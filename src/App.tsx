import './App.css';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { Sort } from './components/Sort/Sort';
import { TeaCard } from './components/TeaCard/TeaCard';

function App() {
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
            <TeaCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
