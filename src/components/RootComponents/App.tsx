import * as React from "react";
import { postList } from "../../api/Butter";
import "../../style/components/RootComponents/App.scss";
import { BlogPost } from "../../interfaces/BlogPost";
import { PostCard } from "../Blog/PostCard";

export const App: React.FC = props => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  React.useEffect(() => {
    postList().then(resp => {
      setPosts(resp.data.data);
    });
  });
  return (
    <>
      <h1>App</h1>
      {posts.map(post => {
        return <PostCard key={post.slug} post={post} />;
      })}
    </>
  );
};
