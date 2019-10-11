import * as React from 'react';
import { Layout, PageHeader, Icon, Divider, Carousel, List, Card } from 'antd';
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
    technologies,
    company,
    features
  } = props;
  const { title } = props.cardProps;
  return (
    <Layout id="work-layout">
      <Header id="work-layout-header">
        <PageHeader
          backIcon={<Icon type="home" />}
          title="Nathan Smith"
          subTitle={`@ ${company}`}
          style={{
            display: 'inline-block'
          }}
          onBack={() => props.history.push(routes.app.home.base)}
        />
        <Divider type="vertical" style={{ height: 18 }} />
        <h3 id="work-layout-project-title">{title}</h3>
      </Header>
      <Content id="work-layout-content">
        <div className="work-layout-section">
          <div id="work-layout-description">{description}</div>
          <List
            style={{ backgroundColor: 'white' }}
            id="work-layout-features"
            header={<h3 style={{ margin: 0 }}>Features</h3>}
            bordered
            dataSource={features}
            renderItem={item => (
              <List.Item
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <h4>{item.name}</h4>
                {item.description}
              </List.Item>
            )}
          />
          <Card id="work-layout-my-role" title="My Role">
            {myRole}
          </Card>
          <Carousel autoplay easing="ease-in-out">
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="work-layout-img"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="work-layout-section">
          <List
            id="work-layout-technologies"
            header={
              <h3 id="work-layout-technologies-header">Technologies Used</h3>
            }
            bordered
            dataSource={technologies}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          <div id="work-layout-challenges-solutions">{challengesSolutions}</div>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const RoutedWorkLayout = withRouter(WorkLayout);
export { RoutedWorkLayout as WorkLayout };
