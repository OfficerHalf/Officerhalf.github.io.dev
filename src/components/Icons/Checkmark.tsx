import React from 'react';

export const Checkmark = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
  </svg>
));
