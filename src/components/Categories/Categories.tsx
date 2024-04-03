export const Categories = ({
  value,
  onSelectCategory,
}: {
  value: number;
  onSelectCategory: (index: number) => void;
}): JSX.Element => {
  const categories: string[] = ['All', 'Black', 'Green'];

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
