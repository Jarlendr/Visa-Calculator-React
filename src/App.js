import React, { useState } from 'react';

import './App.css';
import DaysCounter from './components/DaysCounter/DaysCounter';
import NewStay from './components/NewStay/NewStay';
import StayContainer from './components/StayCard/StayContainer';
import About from './components/About/About';

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
      } else {
        let newDates = [date, ...prevState];
        newDates.sort((a, b) => a.start < b.start ? 1 : -1)
        return newDates;
      }
    });
  };

  const removeDateHandler = (card) => {
    const newDates = dates.filter((stay) => {
      return stay.id !== card;
    });
    setDates(newDates);
  };
  return (
    <div style={{ '--main': colorMain, '--accent': colorAccent }}>
      <DaysCounter dates={dates} onColorChange={changeColorHandler} />
      <NewStay onSaveDateInputsHandler={saveDateInputsHandler} />
      <StayContainer dates={dates} onRemoval={removeDateHandler} />
      <About />
    </div>
  );
}

export default App;
