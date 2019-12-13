import * as React from "react";
import { BlogPost } from "../interfaces/BlogPost";

interface PostContextValue {
  posts: BlogPost[];
  setPosts: (posts: BlogPost[]) => void;
}

export const PostContext = React.createContext<PostContextValue>({
  posts: [],
  setPosts: () => {}
});

export const PostContextProvider: React.FC = props => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
