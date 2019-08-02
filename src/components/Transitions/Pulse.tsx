import * as React from 'react';
import { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { TransitionStyles } from '../../interfaces/TransitionStyles';

interface ScaleProps {
  in: boolean;
  scale?: number;
  timeout?: number;
  ease?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export const Pulse: React.FC<ScaleProps & Partial<TransitionProps>> = props => {
  const {
    in: inProp,
    scale = 1.1,
    timeout = 100,
    ease = 'ease',
    children,
    ...rest
  } = props;

  const startStyle: React.CSSProperties = {
    transition: `transform ${timeout}ms`,
    transitionTimingFunction: ease
  };

  const styles: TransitionStyles = {
    entering: { transform: `scale(${scale})` },
    entered: {},
    exiting: {},
    exited: {}
  };

  return (
    <Transition timeout={timeout} in={inProp} {...rest}>
      {state => (
        <div style={{ ...startStyle, ...styles[state] }} children={children} />
      )}
    </Transition>
  );
};
