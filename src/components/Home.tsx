import * as React from 'react';
import { Project } from './Project';
import { projects } from '../constants/strings';
import '../styles/components/Home.scss';

export const Home: React.FC = props => {
  return (
    <div className="home-wrapper">
      <h2>About</h2>
      <p>
        Nathan Smith is an Associate Software Developer at Bentley Systems where
        he writes full-stack enterprise ASP.NET Core and TypeScript + React web
        applications and maintains a CSS + React UI library. In his spare time
        he plays tabletop and video games and takes pictures of his cats.
      </p>
      <p>
        This is v3.0 or maybe v4.0 of my website, but it is still under
        construction. For a more complete experience, see{' '}
        <a href="http://nathan-smith.org">here</a>.
      </p>
      <h2>Projects</h2>
      <div className="home-projects-list">
        {projects.map(project => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
};
