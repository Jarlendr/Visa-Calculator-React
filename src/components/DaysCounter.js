import './DaysCounter.css';
import DaysCircle from './DaysCircle';

const DaysCounter = () => {
  return (
    <div className="counter">
      <DaysCircle />
      <h5 id="info--text">
        Input your planned stay and any previous stays, then press
        'calculate'
      </h5>
    </div>
  );
};

export default DaysCounter;
