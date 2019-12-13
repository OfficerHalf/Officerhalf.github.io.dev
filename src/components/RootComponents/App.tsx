import * as React from "react";
import { postList, categories as getCategories } from "../../api/Butter";
import "../../style/components/RootComponents/App.scss";
import { PostCard } from "../Blog/PostCard";
import { CategoryContext } from "../../store/CategoryContext";
import { PostContext } from "../../store/PostContext";

export const App: React.FC = props => {
  const { posts, setPosts } = React.useContext(PostContext);
  const { setCategories } = React.useContext(CategoryContext);

  // Initial setup
  React.useEffect(() => {
    postList().then(resp => {
      setPosts(resp.data.data);
    });
  });
  React.useEffect(() => {
    getCategories().then(resp => {
      setCategories(resp.data.data);
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
