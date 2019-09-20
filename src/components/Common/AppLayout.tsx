import * as React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../Navigation/TopBar';
import { Footer as AppFooter } from './Footer';

const { Header, Content, Footer } = Layout;

export const AppLayout: React.FC = props => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <TopBar />
      </Header>
      <Content
        style={{
          padding: '50px 50px 0px 50px',
          display: 'flex',
          flexFlow: 'column'
        }}
      >
        {props.children}
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
