import * as React from 'react';
import cx from 'classnames';
import '../styles/components/Contact.scss';
import { Spin } from 'antd';
import { contactForm } from '../constants/strings';
import { Fade } from './Transitions/Fade';

export const Contact: React.FC = props => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <>
      {loading && (
        <div className="contact-spinner-wrapper">
          <Spin className="contact-spinner" />
        </div>
      )}
      <Fade in={!loading}>
        <iframe
          className={cx('contact-iframe')}
          src={contactForm}
          title="Contact Me"
          onLoad={() => setLoading(false)}
        />
      </Fade>
    </>
  );
};
