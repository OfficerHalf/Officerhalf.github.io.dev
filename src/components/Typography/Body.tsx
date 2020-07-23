import React from 'react';
import cx from 'classnames';

type BodyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  muted?: boolean;
};

export const Body = React.forwardRef<HTMLParagraphElement, BodyProps>(
  (props, ref) => {
    const { muted = false, className, ...rest } = props;
    return <p ref={ref} className={cx({ muted }, className)} {...rest}></p>;
  }
);
