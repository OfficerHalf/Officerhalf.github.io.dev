import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StickyNavButton } from './StickyNavButton';
import '../../styles/components/Navigation/StickyNav.scss';

interface StickyNavProps {
  scrollToHome: () => void;
  scrollToContact: () => void;
}

const StickyNavBase: React.FC<StickyNavProps & RouteComponentProps> = props => {
  return (
    <nav className="sticky-nav bp3-dark">
      <ul>
        <StickyNavButton active={false} onClick={props.scrollToHome}>
          Home
        </StickyNavButton>
        <StickyNavButton active={false} onClick={props.scrollToContact}>
          Contact
        </StickyNavButton>
      </ul>
    </nav>
  );
};

export const StickyNav = withRouter(StickyNavBase);
