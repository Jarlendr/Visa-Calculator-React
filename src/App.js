import React, { useState } from 'react';

import './App.css';
import DaysCounter from './components/DaysCounter';
import NewStay from './components/NewStay';
import StayContainer from './components/StayContainer';

function App() {
  const [dates, setDates] = useState();

  const saveDateInputsHandler = (date) => {
    setDates((prevState) => {
      if (!prevState) {
        return [date];
      } else return [date, ...prevState];
    });
  };

  return (
    <div>
      <DaysCounter />
      <NewStay onSaveDateInputsHandler={saveDateInputsHandler} />
      <StayContainer dates={dates} />
    </div>
  );
}

export default App;
