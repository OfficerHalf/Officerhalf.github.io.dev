import * as React from 'react';
import { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { TransitionStyles } from '../../interfaces/TransitionStyles';

interface ScaleProps {
  in: boolean;
  scale?: number;
  timeout?: number;
}

export const Scale: React.FC<ScaleProps & Partial<TransitionProps>> = props => {
  const {
    in: inProp,
    scale = 0.9,
    timeout = 300,
    ease = 'ease',
    children,
    ...rest
  } = props;

  const startStyle: React.CSSProperties = {
    transition: `transform ${timeout}ms`,
    transitionTimingFunction: ease,
    transform: `scale(${scale})`
  };

  const styles: TransitionStyles = {
    entering: { transform: `scale(1)` },
    entered: { transform: `scale(1)` },
    exiting: { transform: `scale(${scale})` },
    exited: { transform: `scale(${scale})` }
  };

  return (
    <Transition timeout={timeout} in={inProp} {...rest}>
      {state => (
        <div style={{ ...startStyle, ...styles[state] }} children={children} />
      )}
    </Transition>
  );
};
