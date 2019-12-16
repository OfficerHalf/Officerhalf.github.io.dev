import * as React from "react";
import "../../style/components/RootComponents/App.scss";
import { PostCard } from "../Blog/PostCard";
import { PostContext } from "../../store/PostContext";

export const App: React.FC = props => {
  const { posts } = React.useContext(PostContext);
  return (
    <>
      <h1>App</h1>
      {posts.map(post => {
        return <PostCard key={post.slug} post={post} />;
      })}
    </>
  );
};
