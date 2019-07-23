import * as React from 'react';
import { TransitionProps } from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import { TransitionStyles } from '../../interfaces/TransitionStyles';

const styles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

interface FadeProps {
  in: boolean;
  ease?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  timeout?: number;
}

export const Fade: React.FC<FadeProps & Partial<TransitionProps>> = props => {
  const { ease = 'ease', timeout = 300, in: inProp, children, ...rest } = props;

  const startStyle: React.CSSProperties = {
    opacity: 0,
    transition: `opacity ${timeout}ms`,
    transitionTimingFunction: ease
  };
  return (
    <Transition timeout={timeout} in={inProp} {...rest}>
      {state => (
        <div style={{ ...startStyle, ...styles[state] }} children={children} />
      )}
    </Transition>
  );
};
