import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import { BlogPost } from "../../interfaces/BlogPost";
import cx from "classnames";
import "../../style/components/Blog/PostCard.scss";
import { CategoryContext } from "../../store/CategoryContext";
import { Category } from "../../interfaces/Category";
import { PostCategoryIcon } from "./PostCategoryIcon";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard: React.FC<PostCardProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >> = props => {
  const { post, className, ...rest } = props;
  const { categories } = React.useContext(CategoryContext);
  const category: Category = (categories &&
    categories.find(category => post.categories[0].slug === category.slug)) || {
    slug: "",
    name: "",
    letter: "",
    icon: "",
    color: ""
  };
  const postDate = new Date(post.published).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div {...rest} className={cx("post-card-container", className)}>
      <Link to={routes.app.blog.post(post.slug)}>
        <img
          className="post-card-image"
          src={post.featured_image}
          alt={`${post.slug}`}
        />
      </Link>
      <div className="post-card-content">
        <div className="post-card-category">
          <Link to={routes.app.blog.category(category.slug)}>
            {<PostCategoryIcon category={category} />} &mdash; {category.name}
          </Link>
        </div>
        <Link to={routes.app.blog.post(post.slug)}>
          <h2 className="post-card-title">{post.title}</h2>
        </Link>
        <div className="post-card-byline">{postDate}</div>
        <div className="post-card-summary">{post.summary}</div>
      </div>
    </div>
  );
};
