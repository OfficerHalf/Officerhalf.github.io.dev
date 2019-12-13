import * as React from "react";
import { BlogPost } from "../../interfaces/BlogPost";
import cx from "classnames";
import "../../style/components/Blog/PostCard.scss";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard: React.FC<PostCardProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >> = props => {
  const { post, className, ...rest } = props;
  const postDate = new Date(post.published).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div {...rest} className={cx("post-card-container", className)}>
      <div className="post-card-image">
        <img src={post.featured_image} alt={`${post.slug}-featured-image`} />
      </div>
      <div className="post-card-content">
        <div className="post-card-category">
          <a href={post.slug}>
            {post.categories && post.categories[0]
              ? post.categories[0].name
              : ""}
          </a>
        </div>
        <h2 className="post-card-title">title</h2>
        <div className="post-card-byline">{postDate}</div>
        <div className="post-card-summary">{post.summary}</div>
      </div>
    </div>
  );
};
