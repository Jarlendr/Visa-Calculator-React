import './StayCardDuration.css';

const StayCardDuration = (props) => {
  const onRemove = () => {
    props.onRemoval(props.id);
  };

  let days = ' days';
  const duration = Math.round(
    (props.end - props.start) / (1000 * 60 * 60 * 24) + 1
  );

  if (duration === 1) {
    days = ' day';
  }

  return (
    <div className="stay-duration">
      <button
        className="button button-remove__card"
        title="Remove stay"
        onClick={onRemove}
      >
        X
      </button>
      <div className="duration-line" />
      <div>
        {duration} {days}
      </div>
    </div>
  );
};

export default StayCardDuration;
