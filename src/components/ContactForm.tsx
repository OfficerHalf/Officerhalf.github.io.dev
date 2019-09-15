import * as React from 'react';
import cx from 'classnames';
import '../styles/components/Contact.scss';
import { Spin } from 'antd';
import { contactForm } from '../constants/strings';
import { Fade } from './Transitions/Fade';

export const ContactForm: React.FC = props => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <div className="contact-wrapper">
      {loading && <Spin className="contact-spinner" />}
      <Fade in={!loading}>
        <iframe
          className={cx('contact-iframe')}
          src={contactForm}
          title="Contact Me"
          onLoad={() => setLoading(false)}
        />
      </Fade>
    </div>
  );
};
