import './DaysCounter.css';

const DaysCirclePath = () => {
  return (
    <path
      className="circle"
      id="circle"
      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke="#444"
      strokeWidth="1"
      strokeDasharray="0, 100"
    />
  );
};

export default DaysCirclePath;
