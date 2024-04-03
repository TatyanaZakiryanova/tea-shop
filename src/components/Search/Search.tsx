import { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  console.log(searchValue);

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
