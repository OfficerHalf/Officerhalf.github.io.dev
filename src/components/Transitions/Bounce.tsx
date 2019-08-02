import * as React from 'react';
import { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { TransitionStyles } from '../../interfaces/TransitionStyles';

function getTranslation(direction: string, percent: number): string {
  switch (direction) {
    case 'bottom':
      return `translateY(${percent}%)`;
    case 'top':
      return `translateY(-${percent}%)`;
    case 'right':
      return `translateX(${percent}%)`;
    case 'left':
      return `translateX(-${percent}%)`;
  }
  return '';
}

interface BounceProps {
  in: boolean;
  percent?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  timeout?: number;
  ease?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export const Bounce: React.FC<
  BounceProps & Partial<TransitionProps>
> = props => {
  const {
    in: inProp,
    percent = 50,
    direction = 'bottom',
    timeout = 300,
    ease = 'ease',
    children,
    ...rest
  } = props;

  const startStyle: React.CSSProperties = {
    transition: `transform ${timeout}ms`,
    transitionTimingFunction: ease,
    transform: getTranslation(direction, percent)
  };

  const styles: TransitionStyles = {
    entering: { transform: getTranslation(direction, 0) },
    entered: { transform: getTranslation(direction, 0) },
    exiting: { transform: getTranslation(direction, percent) },
    exited: { transform: getTranslation(direction, percent) }
  };

  return (
    <Transition timeout={timeout} in={inProp} {...rest}>
      {state => (
        <div style={{ ...startStyle, ...styles[state] }} children={children} />
      )}
    </Transition>
  );
};
