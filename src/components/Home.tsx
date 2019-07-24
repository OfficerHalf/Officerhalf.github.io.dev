import * as React from 'react';
import { Fade } from './Transitions/Fade';
import { Bounce } from './Transitions/Bounce';
import { Scale } from './Transitions/Scale';
import '../styles/components/Home.scss';

export const Home: React.FC = props => {
  const [aboutIn, setAboutIn] = React.useState<boolean>(false);
  // React.useEffect(() => setAboutIn(true), []);
  return (
    <>
      <Scale in={true} appear>
        <Bounce in={true} appear>
          <Fade in={true} appear>
            <div className="home-wrapper">
              <h3>About</h3>
              <p>
                Nathan Smith is an Associate Software Developer at Bentley
                Systems where he mainly writes full-stack enterprise ASP.NET
                Core and TypeScript + React web applications. In his spare time
                he plays tabletop and video games and takes pictures of his
                cats.
              </p>
              <h3>Projects</h3>
            </div>
          </Fade>
        </Bounce>
      </Scale>
      <button onClick={() => setAboutIn(true)}>SHOW</button>
    </>
  );
};
