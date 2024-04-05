import { LiaSearchSolid } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setSearchValue } from '../../redux/filterSlice';
import { ChangeEvent } from 'react';

export const Search = () => {
  const searchParam = useAppSelector((state) => state.filterReducer.searchValue);
  const dispatch = useAppDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  console.log(searchParam);
  return (
    <div className="search-input">
      <LiaSearchSolid className="search-icon" />
      <input value={searchParam} onChange={onChangeInput} placeholder="Search..." />
    </div>
  );
};
