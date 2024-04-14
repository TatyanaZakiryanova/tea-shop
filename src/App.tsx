import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import TeaPage from './pages/TeaPage';

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="tea/:id" element={<TeaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
