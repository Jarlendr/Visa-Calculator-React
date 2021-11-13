import React from 'react';

import { CSSTransition } from 'react-transition-group';

import './StayContainer.css';

const StayTransition = ({ children, ...props }) => {
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      timeout={300}
      classNames="item"
      {...props}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

export default StayTransition;
