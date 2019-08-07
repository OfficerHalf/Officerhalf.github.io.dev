import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../constants/routes';
import '../../styles/components/Navigation/StickyNav.scss';

const StickyNavBase: React.FC<RouteComponentProps> = props => {
  return (
    <nav className="sticky-nav bp3-dark">
      <ul>
        <li onClick={() => props.history.push(routes.app.home.base)} />
        <li onClick={() => props.history.push(routes.app.contact.base)} />
      </ul>
    </nav>
  );
};

export const StickyNav = withRouter(StickyNavBase);
