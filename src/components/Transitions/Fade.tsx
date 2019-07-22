import * as React from 'react';
import { CSSTransition } from 'react-transition-group/';
import { reflow } from '../../utils/Transitions/reflow';

interface FadeProps {
  in: boolean;
  timeout?: number | {appear: number, enter: number, exit: number};
}

export const Fade: React.FC<FadeProps> = props => {
  const { timeout = 200, in, children, ...rest } = props;
  return <CSSTransition timeout={timeout} in={in}/>
}