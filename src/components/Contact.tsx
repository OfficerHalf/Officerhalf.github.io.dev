import * as React from 'react';
import { ContactForm } from './ContactForm';
import { AppLayout } from './Common/AppLayout';

export const Contact: React.FC = props => {
  return (
    <AppLayout>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <ContactForm />
      </div>
    </AppLayout>
  );
};
