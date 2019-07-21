import * as React from 'react';
import '../styles/components/Home.scss';

export const Home: React.FC = props => (
  <div className="home-wrapper">
    <h3>About</h3>
    <p>
      Nathan Smith is an Associate Software Developer at Bentley Systems where
      he mainly writes full-stack enterprise ASP.NET Core and TypeScript + React
      web applications. In his spare time he plays tabletop and video games and
      takes pictures of his cats.
    </p>
    <h3>Projects</h3>
  </div>
);
