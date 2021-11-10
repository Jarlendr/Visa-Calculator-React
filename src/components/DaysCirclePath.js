import DaysCircle from './DaysCircle';
import './DaysCounter.css';

const DaysCirclePath = (props) => {
  // Determines speed of circle path
  const circleSpeed = (percent) => {
    if (percent <= 33) {
      return 0.5;
    } else if (props.percent > 33 && props.percent <= 66) {
      return 1;
    } else return 1.5;
  };

  let speed = circleSpeed(props.percent);

  let circleAnimate = {
    animation: 'progress ' + speed + 's ease-out forwards'
  }

  return (
    <path
      key={Math.random()}
      className="circle"
      id="circle"
      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke="#444"
      strokeWidth="1"
      strokeDasharray={props.percent + ', 100'}
      style={
        circleAnimate
      }
    />
  );
};

export default DaysCirclePath;
