import styles from './Input.module.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({
  type = 'text',
  onChange,
  name = 'search',
  id = 'search',
  value,
  placeholder = 'Поиск',
  className,
}: IInputProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
    />
  );
};

export default Input;
