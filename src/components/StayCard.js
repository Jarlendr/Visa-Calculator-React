import './StayCard.css';
import StayCardDate from './StayCardDate';
import StayCardDuration from './StayCardDuration';

const StayCard = (props) => {
  return (
    <div className="stay-card">
      <StayCardDate date={props.start} />
      <StayCardDuration start={props.start} end={props.end} onRemoval={props.onRemoval} id={props.id}/>
      <StayCardDate date={props.end} />
    </div>
  );
};

export default StayCard;
