import * as React from 'react';
import { Layout, PageHeader, Icon, Divider } from 'antd';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { WorkProject } from '../../interfaces/WorkProject';
import '../../styles/components/Common/WorkLayout.scss';

const { Header, Content, Footer } = Layout;

const WorkLayout: React.FC<RouteComponentProps & WorkProject> = props => {
  const {
    challengesSolutions,
    description,
    images,
    myRole,
    technologies
  } = props;
  const { title } = props.cardProps;
  return (
    <Layout id="work-layout">
      <Header id="work-layout-header">
        <PageHeader
          backIcon={<Icon type="home" />}
          title="Nathan Smith"
          subTitle="@ Bentley Systems"
          style={{
            display: 'inline-block'
          }}
          onBack={() => props.history.push(routes.app.home.base)}
        />
        <Divider type="vertical" style={{ height: 18 }} />
        <h3 id="work-layout-project-title">{title}</h3>
      </Header>
      <Content>Main</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const RoutedWorkLayout = withRouter(WorkLayout);
export { RoutedWorkLayout as WorkLayout };
