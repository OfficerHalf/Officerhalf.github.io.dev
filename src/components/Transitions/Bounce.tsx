import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

export enum BounceDirection {
  Bottom = 'bottom',
  Top = 'top',
  Left = 'left',
  Right = 'right'
}

interface BounceProps {
  in: boolean;
  direction?: BounceDirection;
  appear?: boolean;
  unmountOnExit?: boolean;
  timeout?: number;
}

export const Bounce: React.FC<BounceProps> = props => {
  const {
    in: inProp,
    direction = BounceDirection.Bottom,
    unmountOnExit,
    appear,
    timeout = 300,
    children
  } = props;
  return (
    <CSSTransition
      children={children}
      timeout={timeout}
      in={inProp}
      unmountOnExit={unmountOnExit}
      appear={appear}
      classNames={`${direction} bounce`}
    />
  );
};
