import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import './StayContainer.css';
import StayCard from './StayCard';

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
          <CSSTransition
            timeout={300}
            key={stay.id}
            classNames="item"
          >
            <StayCard
              key={stay.id}
              id={stay.id}
              start={stay.start}
              end={stay.end}
              onRemoval={props.onRemoval}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
  return <TransitionGroup component="div" className="stay empty" />;
};

export default StayContainer;
