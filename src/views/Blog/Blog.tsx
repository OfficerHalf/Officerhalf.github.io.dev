import * as React from "react";

import { butter } from "../../api/butter";
import { BlogPost } from "../../interfaces/BlogPost";

interface BlogState {
  posts: BlogPost[];
}

export class Blog extends React.Component<{}, BlogState> {
  private api: butter;

  constructor(props: any) {
    super(props);
    this.api = new butter();
    this.state = {
      posts: []
    };
  }

  public componentDidMount() {
    this.api.getPosts().then(resp => {
      this.setState({ posts: resp.data });
    });
  }

  public render() {
    return <div>{this.state.posts.map(post => post.title)}</div>;
  }
}
