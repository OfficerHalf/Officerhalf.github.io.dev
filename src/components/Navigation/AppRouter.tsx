import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home/Home';
import { Contact } from '../Contact';
import { FourZeroFour } from '../RootComponents/404';
import { TopBar } from './TopBar';
import { Footer as AppFooter } from '../Common/Footer';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const Router: React.FC = props => (
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
      <Switch>
        <Route exact path={routes.app.contact.base} component={Contact} />
        <Route exact path={routes.app.home.base} component={Home} />
        <Route component={FourZeroFour} />
      </Switch>
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Layout>
);
