import * as React from "react";
import cx from "classnames";
import { Category } from "../../interfaces/Category";
import "../../style/components/Blog/PostCategoryIcon.scss";

interface PostCategoryIconProps {
  category: Category;
  large?: boolean;
}

export const PostCategoryIcon: React.FC<PostCategoryIconProps> = props => {
  const { category, large = false } = props;
  if (category.icon === "") {
    return (
      <span
        className={cx("post-card-category-icon", { large })}
        style={{ backgroundColor: category.color }}
      >
        {category.letter}
      </span>
    );
  }
  return (
    <img
      className={cx("post-card-category-icon", { large })}
      src={category.icon}
      alt={`category-icon-${category.slug}`}
    />
  );
};
