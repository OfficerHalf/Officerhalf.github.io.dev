import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { StickyNavButton } from './StickyNavButton';
import '../../styles/components/Navigation/StickyNav.scss';

const StickyNavBase: React.FC<RouteComponentProps> = props => {
  return (
    <nav className="sticky-nav bp3-dark">
      <StickyNavButton
        label="Home"
        onClick={() => props.history.push(routes.app.home.base)}
        active={true}
      />
      <StickyNavButton
        label="Contact"
        onClick={() => props.history.push(routes.app.contact.base)}
        active={true}
      />
    </nav>
  );
};

export const StickyNav = withRouter(StickyNavBase);
