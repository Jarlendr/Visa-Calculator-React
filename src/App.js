import React, { useState } from 'react';

import './App.css';
import DaysCounter from './components/DaysCounter';
import NewStay from './components/NewStay';
import StayContainer from './components/StayContainer';

function App() {
  const [dates, setDates] = useState();
  const [colorMain, setColorMain] = useState('rgb(79, 161, 255)');
  const [colorAccent, setColorAccent] = useState('rgb(0, 119, 255)');

  const changeColorHandler = (percent) => {
    if (percent >= 90 && percent < 100) {
      setColorMain('rgb(255, 173, 79)');
      setColorAccent('rgb(187, 100, 0)');
    } else if (percent >= 100) {
      setColorMain('rgb(255, 79, 79)');
      setColorAccent('rgb(197, 27, 27)');
    } else {
      setColorMain('rgb(79, 161, 255)');
      setColorAccent('rgb(0, 119, 255)');
    }
  };

  const saveDateInputsHandler = (date) => {
    setDates((prevState) => {
      if (!prevState) {
        return [date];
      } else return [date, ...prevState];
    });
  };

  return (
    <div style={{ '--main': colorMain, '--accent': colorAccent }}>
      <DaysCounter dates={dates} onColorChange={changeColorHandler} />
      <NewStay onSaveDateInputsHandler={saveDateInputsHandler} />
      <StayContainer dates={dates} />
    </div>
  );
}

export default App;
