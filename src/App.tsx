import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/Spinner/Spinner';

import MainLayout from './layouts/MainLayout';

const CartPage = lazy(() => import('./pages/CartPage'));
const TeaPage = lazy(() => import('./pages/TeaPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
