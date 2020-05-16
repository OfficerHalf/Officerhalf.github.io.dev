import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header } from '../Navigation/Header';

export const Layout: React.FC = props => {
  return (
    <div>
      <Helmet>
        <title>Nathan Smith</title>
      </Helmet>
      <Header />
      <Outlet />
    </div>
  );
};
