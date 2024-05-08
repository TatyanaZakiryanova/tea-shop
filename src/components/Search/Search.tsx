import { LiaSearchSolid } from 'react-icons/lia';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/filterSlice/filterSlice';
import { ChangeEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useAppDispatch();

  const debouncedOnChangeInput = useCallback(
    debounce((val: string) => {
      dispatch(setSearchValue(val));
    }, 300),
    [],
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value), debouncedOnChangeInput(event.target.value);
  };

  return (
    <div className={styles.search}>
      <LiaSearchSolid className={styles.icon} />
      <input value={searchText} onChange={onChangeInput} placeholder="Search..." />
    </div>
  );
};
