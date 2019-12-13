import * as React from "react";
import { CategoryContextProvider } from "../../store/CategoryContext";
import { App } from "./App";
import { PostContextProvider } from "../../store/PostContext";

export const AppContext: React.FC = props => {
  return (
    <CategoryContextProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </CategoryContextProvider>
  );
};
