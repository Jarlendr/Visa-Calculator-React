import './StayCardDuration.css';

const StayCardDuration = (props) => {
  let days = ' days';
  const duration =
    Math.round((props.end - props.start) / (1000 * 60 * 60 * 24) + 1);

  if (duration === 1) {
    days = ' day';
  }

  return (
    <div className="stay-duration">
      <div className="duration-line"/>
      <div>{duration} {days}</div>
    </div>
  );
};

export default StayCardDuration;
