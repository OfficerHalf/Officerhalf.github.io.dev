import * as React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../Navigation/TopBar';
import { Footer as AppFooter } from './Footer';

const { Header, Content, Footer } = Layout;

interface AppLayoutProps {
  fixedWidth?: number;
}

export const AppLayout: React.FC<AppLayoutProps> = props => {
  const { fixedWidth } = props;
  return (
    <Layout
      className="layout"
      style={{
        minHeight: '100vh',
        alignItems: fixedWidth ? 'center' : undefined
      }}
    >
      <Header
        style={{
          width: '100%',
          display: fixedWidth ? 'flex' : undefined,
          alignItems: fixedWidth ? 'center' : undefined,
          justifyContent: fixedWidth ? 'center' : undefined
        }}
      >
        <TopBar
          style={{ width: fixedWidth, paddingLeft: 50, paddingRight: 50 }}
        />
      </Header>
      <Content
        style={{
          padding: '50px 50px 0px 50px',
          display: 'flex',
          flexFlow: 'column',
          maxWidth: fixedWidth
        }}
      >
        {props.children}
      </Content>
      <Footer style={{ maxWidth: fixedWidth }}>
        <AppFooter
          style={{ width: fixedWidth ? fixedWidth - 100 : undefined }}
        />
      </Footer>
    </Layout>
  );
};
