import React, { useState } from 'react';

import './App.css';
import DaysCounter from './components/DaysCounter';
import NewStay from './components/NewStay';
import StayContainer from './components/StayContainer';

function App() {
  const [dates, setDates] = useState();

  const saveDateInputsHandler = (date) => {
    setDates((prevDates) => {
      return [date, ...prevDates];
    });
  };

  console.log(dates);
  return (
    <div>
      <DaysCounter />
      <NewStay onSaveDateInputsHandler={saveDateInputsHandler} />
      <StayContainer />
    </div>
  );
}

export default App;
