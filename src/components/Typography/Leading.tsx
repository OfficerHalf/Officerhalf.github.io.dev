import React from 'react';
import cx from 'classnames';

type LeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  muted?: boolean;
};

export const Leading = React.forwardRef<HTMLHeadingElement, LeadingProps>(
  (props, ref) => {
    const { muted = false, className, children, ...rest } = props;
    return (
      <h4 ref={ref} className={cx({ muted }, className)} {...rest}>
        {children}
      </h4>
    );
  }
);
