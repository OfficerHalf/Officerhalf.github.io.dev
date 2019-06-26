import * as React from "react";

import { butter } from "../api/butter";
import { BlogPost } from "../interfaces/BlogPost";

interface ContextProps {
  posts: BlogPost[];
  getPosts: () => void;
}

export const BlogContext = React.createContext<ContextProps>({
  posts: [],
  getPosts: () => {}
});

export class BlogProvider extends React.Component<{}, ContextProps> {
  private api: butter;
  constructor(props: any) {
    super(props);
    this.api = new butter();
    this.state = {
      posts: [],
      getPosts: this.getPosts
    };
  }

  public componentDidMount() {
    this.getPosts();
  }

  public render() {
    return (
      <BlogContext.Provider value={this.state}>
        {this.props.children}
      </BlogContext.Provider>
    );
  }

  private getPosts(): void {
    this.api.getPosts().then(postResponse => {
      console.log(postResponse.data);
      this.setState({ posts: postResponse.data });
    });
  }
}

export const BlogConsumer = BlogContext.Consumer;
