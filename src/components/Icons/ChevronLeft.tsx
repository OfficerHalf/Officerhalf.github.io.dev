import React from 'react';

export const ChevronLeft = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
  </svg>
));
