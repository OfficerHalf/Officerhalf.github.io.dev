import * as React from 'react';
import { AppLayout } from '../Common/AppLayout';
import { Project } from '../Project';
import { projects, work } from '../../constants/strings';
import '../../styles/components/Home/Home.scss';

export const Home: React.FC = props => {
  return (
    <AppLayout>
      <div
        className="home-wrapper"
        style={{ backgroundColor: 'white', padding: 24, minHeight: 280 }}
      >
        <div className="home-section">
          <div className="home-section-inner">
            <h2>About</h2>
            <p>
              Nathan Smith is an Associate Software Developer at Bentley Systems
              where he writes full-stack enterprise ASP.NET Core and TypeScript
              + React web applications and maintains a CSS + React UI library.
              In his spare time he plays tabletop and video games and takes
              pictures of his cats.
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
          <div className="home-section-inner home-section-inner-projects">
            <h2>Work</h2>
            <div className="home-project-grid">
              {work.map(thing => (
                <Project {...thing.cardProps} key={thing.cardProps.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
