import * as React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const WorkLayout: React.FC = props => {
  return (
    <Layout>
      <Header>Top</Header>
      <Content>Main</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
