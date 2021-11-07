import DaysCirclePath from './DaysCirclePath';
import DaysCircleText from './DaysCircleText';

const DaysCircle = () => {
  return (
    <svg viewBox="0 0 36 36" height="300" className="circular--chart">
      <DaysCirclePath />
      <DaysCircleText />
    </svg>
  );
};

export default DaysCircle;
