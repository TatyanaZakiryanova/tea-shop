import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

const Button: React.FC<IButtonProps> = ({ className, children, active = false, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${active ? styles.active : ''} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
