import * as React from 'react';
import cx from 'classnames';
import { Spinner } from '@blueprintjs/core';
import '../styles/components/Contact.scss';
import { contactForm } from '../constants/strings';

export const Contact: React.FC = props => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <>
      {loading && (
        <div className="contact-spinner-wrapper">
          <Spinner className="contact-spinner" />
        </div>
      )}
      <iframe
        className={cx('contact-iframe', { hidden: loading })}
        src={contactForm}
        title="Contact Me"
        onLoad={() => setLoading(false)}
      />
    </>
  );
};
