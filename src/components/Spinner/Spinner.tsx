import { PiSpinnerGapLight } from 'react-icons/pi';

export const Spinner = () => {
  return (
    <div className="spinner">
      <PiSpinnerGapLight className="spinner-icon" />
      <br />
      Loading, please wait...
    </div>
  );
};
