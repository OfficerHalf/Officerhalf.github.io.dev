import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home/Home';
import { Contact } from '../Contact';
import { FourZeroFour } from '../RootComponents/404';
import { TopBar } from './TopBar';
import { Footer as AppFooter } from '../Common/Footer';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export const Router: React.FC = props => (
  <Layout className="layout">
    <Header>
      <TopBar />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ backgroundColor: 'white', padding: 24, minHeight: 280 }}>
        <Switch>
          <Route exact path={routes.app.contact.base} component={Contact} />
          <Route exact path={routes.app.home.base} component={Home} />
          <Route component={FourZeroFour} />
        </Switch>
      </div>
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
);
