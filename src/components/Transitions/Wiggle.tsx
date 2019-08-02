import * as React from 'react';
import '../../styles/components/Transitions/Wiggle.scss';

interface WiggleProps {
  in: boolean;
}

export const Wiggle: React.FC<WiggleProps> = props => {
  const { in: inProp, children } = props;

  return (
    <div className={`${inProp ? 'um-animate-wiggle' : undefined}`}>
      {children}
    </div>
  );
};
