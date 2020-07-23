import React from 'react';
import cx from 'classnames';

type SubheadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  muted?: boolean;
};

export const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps>(
  (props, ref) => {
    const { muted = false, className, children, ...rest } = props;
    return (
      <h3 ref={ref} className={cx({ muted }, className)} {...rest}>
        {children}
      </h3>
    );
  }
);
