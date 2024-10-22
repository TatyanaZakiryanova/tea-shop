import { useState } from 'react';

import styles from './Dropdown.module.scss';

interface DropdownProps<T> {
  label: string;
  options: T[];
  currentOption: T;
  handleOption: (selectedOption: T) => void;
}

export const Dropdown = <T extends { name: string }>({
  options,
  currentOption,
  handleOption,
  label,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: T) => {
    handleOption(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.sort}>
      <h2 className={styles.label}>
        {label}: <span onClick={toggleDropdown}>{currentOption.name}</span>
      </h2>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            {options.map((option) => (
              <li key={option.name} onClick={() => handleSelect(option)}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
