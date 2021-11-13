import React from 'react';

import {
  TransitionGroup,
} from 'react-transition-group';

import './StayContainer.css';
import StayCard from './StayCard';
import StayTransition from './StayTransition'

const StayContainer = (props) => {
  if (props.dates) {
    if (props.dates.length === 0) {
      return (
        <TransitionGroup component="div" className="stay empty" />
      );
    }
    return (
      <TransitionGroup component="div" className="stay">
        {props.dates.map((stay) => (
          <StayTransition key={Math.random()}>
            <StayCard
              key={stay.id}
              id={stay.id}
              start={stay.start}
              end={stay.end}
              onRemoval={props.onRemoval}
            />
          </StayTransition>
        ))}
      </TransitionGroup>
    );
  }
  return <TransitionGroup component="div" className="stay empty" />;
};

export default StayContainer;
