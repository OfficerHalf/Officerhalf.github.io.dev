import * as React from 'react';
import { Project } from '../Project';
import { projects } from '../../constants/strings';
import { Contact } from '../Contact';
import '../../styles/components/Home/Home.scss';

export const Home: React.FC = props => {
  return (
    <div className="home-wrapper">
      <div className="home-section">
        <div className="home-section-inner">
          <h2>About</h2>
          <p>
            Nathan Smith is an Associate Software Developer at Bentley Systems
            where he writes full-stack enterprise ASP.NET Core and TypeScript +
            React web applications and maintains a CSS + React UI library. In
            his spare time he plays tabletop and video games and takes pictures
            of his cats.
          </p>
        </div>
        <div className="home-section-inner home-section-inner-projects">
          <h2>Projects</h2>
          <div className="home-project-grid">
            {projects.map(project => (
              <Project {...project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
      <div className="home-section">
        <Contact />
      </div>
    </div>
  );
};
