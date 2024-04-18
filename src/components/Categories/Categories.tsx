import { selectCategoryProps } from './types';

export const Categories: React.FC<selectCategoryProps> = ({
  value,
  onSelectCategory,
}): JSX.Element => {
  const categories: string[] = ['All', 'Black', 'Green', 'Herbal'];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, id) => (
          <li key={id}>
            <button
              className={value === id ? 'active-button' : ''}
              onClick={() => onSelectCategory(id)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
