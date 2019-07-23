import { CSSProperties } from 'react';

export interface TransitionStyles {
  entering: CSSProperties;
  entered: CSSProperties;
  exiting: CSSProperties;
  exited: CSSProperties;
  [x: string]: CSSProperties;
}
