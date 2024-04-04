import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import { createContext, useState } from 'react';

export type TeaProps = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  rating: number;
  weight: number[];
  price: number;
};

export interface Context {
  searchValue: string;
  setSearchValue: (newValue: string) => void;
}

export const SearchContext = createContext<Context>({
  searchValue: '',
  setSearchValue(newValue) {},
});

export const App = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
};

export default App;
