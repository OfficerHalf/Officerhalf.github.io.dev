import * as React from 'react';
import { Project } from '../Project';
import { projects } from '../../constants/strings';
import { Contact } from '../Contact';
import '../../styles/components/Home/Home.scss';
import { StickyNav } from '../Navigation/StickyNav';
import { useScrollTo } from 'the-captains-hooks';

export const Home: React.FC = props => {
  const homeRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const scrollToHome = useScrollTo<HTMLDivElement>(homeRef);
  const scrollToContact = useScrollTo<HTMLDivElement>(contactRef);

  return (
    <>
      <StickyNav
        scrollToHome={scrollToHome}
        scrollToContact={scrollToContact}
      />
      <div className="home-wrapper" ref={homeRef}>
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
            {projects.map(project => (
              <Project {...project} key={project.title} />
            ))}
          </div>
        </div>
        <div className="home-section" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </>
  );
};
