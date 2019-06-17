import * as React from 'react';
import { TopNav } from './components/TopNav';
import { space, type, media } from './style/constants';
import { Drawer } from './components/Drawer';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const Home = () => <div>Home</div>;
const Blog = () => <div>Blog</div>;

interface AppState {
  drawerOpen: boolean;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    const mediaQuery = window.matchMedia(media.default);
    this.state = {
      drawerOpen: mediaQuery.matches
    };
  }

  public render() {
    return (
      <div style={{ fontFamily: type.bodyFont, fontSize: type.bodySize }}>
        <TopNav
          hamburgerCallback={this.toggleDrawer}
          drawerOpen={this.state.drawerOpen}
        />
        <HashRouter>
          <div
            id="app-wrapper"
            style={{ display: 'flex', marginTop: space.headerHeight }}
          >
            <Drawer
              open={this.state.drawerOpen}
              items={[
                {
                  label: routes.home.label,
                  path: routes.home.href,
                  hasChildren: true
                },
                {
                  label: routes.home.about.label,
                  path: routes.home.about.href,
                  depth: 1
                },
                {
                  label: routes.home.contact.label,
                  path: routes.home.contact.href,
                  depth: 1
                },
                {
                  label: routes.blog.label,
                  path: routes.blog.href,
                  hasChildren: true
                },
                { label: routes.projects.label, hasChildren: true },
                {
                  label: routes.projects.alloy.label,
                  path: routes.projects.alloy.href,
                  depth: 1
                },
                {
                  label: routes.projects.homebrewery.label,
                  path: routes.projects.homebrewery.href,
                  depth: 1
                },
                {
                  label: routes.projects.dungeonBuilder.label,
                  depth: 1,
                  hasChildren: true
                },
                {
                  label: routes.projects.dungeonBuilder.maps.label,
                  depth: 2,
                  path: routes.projects.dungeonBuilder.maps.href
                },
                {
                  label: routes.projects.dungeonBuilder.tilesets.label,
                  depth: 2,
                  path: routes.projects.dungeonBuilder.tilesets.href
                },
                { label: routes.tabletop.label, hasChildren: true },
                {
                  label: routes.tabletop.initiative.label,
                  path: routes.tabletop.initiative.href,
                  depth: 1
                },
                {
                  label: routes.tabletop.generators.label,
                  path: routes.tabletop.generators.href,
                  depth: 1
                },
                {
                  label: routes.tabletop.spellbook.label,
                  path: routes.tabletop.spellbook.href,
                  depth: 1
                }
              ]}
            >
              <Switch>
                <Route exact path={routes.home.href} component={Home} />
                <Route path={routes.blog.href} component={Blog} />
              </Switch>
            </Drawer>
          </div>
        </HashRouter>
      </div>
    );
  }

  private toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
}
