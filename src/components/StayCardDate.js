import './StayCardDate.css';

const StayCardDate = (props) => {
  const day = props.date.getDate(),
    month = props.date.toLocaleString('en-us', { month: 'short' }),
    year = props.date.getFullYear();

  return (
    <div className="stay-date">
      <div className="stay-date__container">
        <div className="stay-date__year">{year}</div>
        <div className="stay-date__day">{day}</div>
        <div className="stay-date__month">{month}</div>
      </div>
    </div>
  );
};

export default StayCardDate;
