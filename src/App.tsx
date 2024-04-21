import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/Spinner/Spinner';

const CartPage = lazy(() => import('./pages/CartPage'));
const TeaPage = lazy(() => import('./pages/TeaPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Spinner />}>
              <CartPage />
            </Suspense>
          }
        />
        <Route
          path="tea/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <TeaPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
