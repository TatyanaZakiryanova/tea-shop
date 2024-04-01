import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export type TeaProps = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  weight: number[];
  price: number;
};

export const App = (): JSX.Element => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
