import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageHeader, Layout } from 'antd';
import { ImageComparison } from '../Common/ImageComparison';
import { routes } from '../../constants/routes';

const { Content } = Layout;

const Alloy: React.FC<RouteComponentProps> = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <PageHeader
        onBack={() => props.history.push(routes.app.home.base)}
        title="Alloy"
      />
      <Content
        style={{
          justifyContent: 'center',
          display: 'flex',
          textAlign: 'center'
        }}
      >
        <div>
          <ImageComparison
            imageLeftSrc={`${process.env.PUBLIC_URL}/Alloy2.png`}
            imageRightSrc={`${process.env.PUBLIC_URL}/Monokai2.png`}
            width={1280}
            height={800}
            labelLeft="Alloy"
            labelRight="Monokai"
            dragHandleColor="#F0558E"
          />
          <h2 style={{ marginTop: 5 }}>About</h2>
          <p>
            Alloy is my response to the green and yellow tinted world of
            Monokai.
            <br />
            Alloy has more contrast and clearer color, while maintaining
            Monokai's vibrant palette.
          </p>
          <p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the extension for VS Code.
            </a>
            <br />
            <a
              href="https://github.com/OfficerHalf/alloy-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the source.
            </a>
          </p>
        </div>
      </Content>
    </Layout>
  );
};

const RoutedAlloy = withRouter(Alloy);
export { RoutedAlloy as Alloy };
