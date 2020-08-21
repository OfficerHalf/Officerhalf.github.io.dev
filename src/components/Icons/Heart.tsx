import React from 'react';

export const Heart = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg ref={ref} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
    </svg>
  );
});
