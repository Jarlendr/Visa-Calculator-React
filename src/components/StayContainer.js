import './StayContainer.css';
import StayCard from './StayCard';

const StayContainer = (props) => {
  if (!props.dates) {
    return null;
  } else if (props.dates.length === 0) {
    return null;
  }

  return (
    <div className="stay">
      {props.dates.map((stay) => (
        <StayCard
          key={stay.id}
          id={stay.id}
          start={stay.start}
          end={stay.end}
          onRemoval={props.onRemoval}
        />
      ))}
    </div>
  );
};

export default StayContainer;
