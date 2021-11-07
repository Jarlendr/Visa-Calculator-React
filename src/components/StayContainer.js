import './StayContainer.css';
import StayCard from './StayCard';

const StayContainer = (props) => {
  return (
    <div className="stay">
      <StayCard />
      <StayCard />
      <StayCard />
    </div>
  );
};

export default StayContainer;
