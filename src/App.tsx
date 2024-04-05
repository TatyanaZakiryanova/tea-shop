import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';

export type TeaProps = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number[];
  price: number;
};

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
