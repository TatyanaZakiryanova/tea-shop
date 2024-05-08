import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Spinner } from './components/Spinner/Spinner';

import MainLayout from './layouts/MainLayout';
import Main from './pages/Main/Main';
import { DataNotFound } from './pages/NotFound/DataNotFound';

const CartPage = lazy(() => import('./pages/CartPage/Cart'));
const TeaPage = lazy(() => import('./pages/TeaPage/SingleTea'));

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
          <Route path="*" element={<DataNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
