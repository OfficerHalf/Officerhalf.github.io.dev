import * as React from 'react';
import { routes } from '../../constants/routes';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Empty, Button } from 'antd';
import '../../styles/components/RootComponents/404.scss';
import { ImageComparison } from '../Common/ImageComparison';

const FourZeroFourBase: React.FC<RouteComponentProps> = props => (
  <div id="not-found">
    {/* <Empty
      description={<span>Something went wrong or there is nothing here.</span>}
    >
      <Link to={routes.app.home.base}>
        <Button type="primary">Return Home</Button>
      </Link>
    </Empty> */}
    <ImageComparison
      imageLeftSrc="https://via.placeholder.com/800x600/0000FF"
      imageRightSrc="https://via.placeholder.com/700x500/00FF00"
    />
  </div>
);

export const FourZeroFour = withRouter(FourZeroFourBase);
