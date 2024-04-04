import { useContext } from 'react';
import { SearchContext } from '../../App';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className="search-input">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};
