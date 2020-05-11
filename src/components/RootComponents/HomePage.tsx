import React from 'react';
import { Head } from '../MetaComponents/Head';
import { Header } from '../Navigation/Header';

export const HomePage: React.FC = props => {
  return (
    <div>
      <Head>
        <title>Nathan Smith</title>
      </Head>
      <Header />
    </div>
  );
};
