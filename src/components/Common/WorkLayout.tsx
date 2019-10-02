import * as React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const WorkLayout: React.FC = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}>
        <span style={{ color: '#2A2F34' }}>Nathan Smith @ Bentley Systems</span>
      </Header>
      <Content>Main</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
