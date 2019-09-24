import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageHeader, Layout } from 'antd';
import { ImageComparison } from '../Common/ImageComparison';

const { Header, Content, Footer } = Layout;

const Alloy: React.FC<RouteComponentProps> = props => {
  return (
    <Layout>
      <PageHeader onBack={() => props.history.goBack()} title="Alloy" />
      <Content style={{ justifyContent: 'center', display: 'flex' }}>
        <div>
          <ImageComparison
            imageLeftSrc={`${process.env.PUBLIC_URL}/Alloy2.png`}
            imageRightSrc={`${process.env.PUBLIC_URL}/Monokai2.png`}
            width={1440}
            height={900}
            labelLeft="Alloy"
            labelRight="Monokai"
            dragHandleColor="#F0558E"
          />
          <h2>About</h2>
          <p>
            Alloy is my response to the green and yellow tinted world of
            Monokai.
          </p>
        </div>
      </Content>
    </Layout>
  );
};

const RoutedAlloy = withRouter(Alloy);
export { RoutedAlloy as Alloy };
