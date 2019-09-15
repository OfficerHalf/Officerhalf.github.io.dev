import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../Home/Home';
import { ContactForm } from '../ContactForm';
import { FourZeroFour } from '../RootComponents/404';
import { TopBar } from './TopBar';
import { Footer as AppFooter } from '../Common/Footer';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export const Router: React.FC = props => (
  <Layout className="layout">
    <Header>
      <TopBar />
    </Header>
    <Content style={{ padding: '50px 50px 0px 50px' }}>
      <div style={{ backgroundColor: 'white', padding: 24, minHeight: 280 }}>
        <Switch>
          <Route exact path={routes.app.contact.base} component={ContactForm} />
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
