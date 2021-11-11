import React, { useEffect } from 'react';

import DaysCirclePath from './DaysCirclePath';
import DaysCircleText from './DaysCircleText';

const DaysCircle = (props) => {
  let percent = 0,
    days = 0;

  // Calculates a percentage where 100% = 90 days and 0% = 0 days
  const percentCalculator = (days) => {
    if (days >= 90) {
      return 100;
    }
    return (days / 90) * 100;
  };
  if (props.check) {
    percent = percentCalculator(props.check[0]);
    days = props.check[0];
  }
  useEffect(() => {
    props.onColorChange(percent);
    props.onTextChange(percent);
  }, [props, percent]);

  return (
    <svg viewBox="0 0 36 36" height="300" className="circular--chart">
      <DaysCirclePath percent={percent} />
      <DaysCircleText days={days} />
    </svg>
  );
};

export default DaysCircle;
