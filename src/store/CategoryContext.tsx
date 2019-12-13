import * as React from "react";
import { Category } from "../interfaces/Category";

interface CategoryContextValue {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const CategoryContext = React.createContext<CategoryContextValue>({
  categories: [],
  setCategories: () => {}
});

export const CategoryContextProvider: React.FC = props => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
