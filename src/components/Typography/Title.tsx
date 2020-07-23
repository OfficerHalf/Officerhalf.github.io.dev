import React from 'react';
import cx from 'classnames';

type TitleProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  muted?: boolean;
};

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (props, ref) => {
    const { muted = false, className, children, ...rest } = props;
    return (
      <h2 ref={ref} className={cx({ muted }, className)} {...rest}>
        {children}
      </h2>
    );
  }
);
