import './StayContainer.css';
import StayCard from './StayCard';

const StayContainer = (props) => {
  if (!props.dates) {
    return null;
  }

  return (
    <div className="stay">
      {props.dates.map((stay) => (
        <StayCard key={stay.id} start={stay.start} end={stay.end} />
      ))}
    </div>
  );
};

export default StayContainer;
