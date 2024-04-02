import { MdOutlineErrorOutline } from 'react-icons/md';

export const DataNotFound = (): JSX.Element => {
  return (
    <div className="error-icon">
      <h1>
        <MdOutlineErrorOutline />
        <br />
        Data not found
      </h1>
    </div>
  );
};
