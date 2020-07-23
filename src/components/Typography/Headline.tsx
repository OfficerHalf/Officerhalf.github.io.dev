import React from 'react';
import cx from 'classnames';

type HeadlineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  muted?: boolean;
};

export const Headline = React.forwardRef<HTMLHeadingElement, HeadlineProps>(
  (props, ref) => {
    const { muted = false, className, children, ...rest } = props;
    return (
      <h1 ref={ref} className={cx({ muted }, className)} {...rest}>
        {children}
      </h1>
    );
  }
);
