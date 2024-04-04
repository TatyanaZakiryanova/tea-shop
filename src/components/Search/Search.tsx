import { useContext } from 'react';
import { SearchContext } from '../../App';
import { LiaSearchSolid } from 'react-icons/lia';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className="search-input">
      <LiaSearchSolid className="search-icon" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
