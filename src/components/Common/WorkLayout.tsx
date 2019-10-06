import * as React from 'react';
import { Layout, PageHeader, Icon, Divider, Carousel } from 'antd';
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
    company
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
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 16
        }}
      >
        <div id="work-layout-carousel">
          <Carousel
            autoplay
            style={{ width: 600, height: 560 }}
            easing="ease-in-out"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ maxWidth: 600, maxHeight: 560 }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const RoutedWorkLayout = withRouter(WorkLayout);
export { RoutedWorkLayout as WorkLayout };
