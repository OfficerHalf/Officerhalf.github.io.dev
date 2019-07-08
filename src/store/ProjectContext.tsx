import * as React from "react";

import { butter } from "../api/butter";
import { Project } from "../interfaces/Project";

interface ContextProps {
  projects: Project[];
  getProjects: () => void;
}

export const ProjectContext = React.createContext<ContextProps>({
  projects: [],
  getProjects: () => {}
});

export class ProjectProvider extends React.Component<{}, ContextProps> {
  private api: butter;
  constructor(props: any) {
    super(props);
    this.api = new butter();
    this.state = {
      projects: [],
      getProjects: this.getProjects
    };
  }

  public componentDidMount() {
    this.getProjects();
  }

  public render() {
    return (
      <ProjectContext.Provider value={this.state}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }

  private getProjects(): void {
    this.api.getProjects().then(projectResponse => {
      this.setState({ projects: projectResponse.data });
    });
  }
}

export const ProjectConsumer = ProjectContext.Consumer;
