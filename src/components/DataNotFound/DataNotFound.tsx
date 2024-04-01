import { MdOutlineErrorOutline } from 'react-icons/md';

export const DataNotFound = () => {
  return (
    <div className="error-icon">
      <h1>
        <MdOutlineErrorOutline className="error-icon" />
        <br />
        Data not found
      </h1>
    </div>
  );
};
