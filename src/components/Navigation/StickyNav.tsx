import * as React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import '../../styles/components/Navigation/StickyNav.scss';

const StickyNavBase: React.FC<RouteComponentProps> = props => {
  return (
    <nav className="sticky-nav bp3-dark">
      <ul>
        <li>
          <Link to={routes.app.home.base}>Home</Link>
        </li>
        <li>
          <Link to={routes.app.contact.base}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export const StickyNav = withRouter(StickyNavBase);
