import * as React from "react";
import {
  CategoryContextProvider,
  CategoryContext
} from "../../store/CategoryContext";
import { AppRouter } from "./AppRouter";
import { PostContextProvider, PostContext } from "../../store/PostContext";
import { postList, categories } from "../../api/Butter";

const AppContextInner: React.FC = props => {
  const { setPosts } = React.useContext(PostContext);
  const { setCategories } = React.useContext(CategoryContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  // Initial setup, only call these once
  React.useEffect(() => {
    postList().then(resp => {
      setPosts(resp.data.data);
    });
  }, []);
  React.useEffect(() => {
    categories().then(resp => {
      setCategories(resp.data.data);
    });
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return <AppRouter />;
};

export const AppContext: React.FC = props => {
  return (
    <CategoryContextProvider>
      <PostContextProvider>
        <AppContextInner />
      </PostContextProvider>
    </CategoryContextProvider>
  );
};
