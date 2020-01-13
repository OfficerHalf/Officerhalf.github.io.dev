import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { getPost } from "../../api/Butter";
import { BlogPost as Post } from "../../interfaces/BlogPost";
import "../../style/components/Blog/BlogPost.scss";
import { PostCategoryIcon } from "./PostCategoryIcon";
import { CategoryContext } from "../../store/CategoryContext";
import { Category } from "../../interfaces/Category";

export const BlogPost: React.FC<RouteComponentProps<{
  slug: string;
}>> = props => {
  const [post, setPost] = React.useState<Post>();
  const { slug } = props.match.params;
  const { categories } = React.useContext(CategoryContext);
  const category: Category = (categories &&
    categories.find(
      category => post && post.categories[0].slug === category.slug
    )) || {
    slug: "",
    name: "",
    letter: "",
    icon: "",
    color: ""
  };

  React.useEffect(() => {
    if (!post || post.slug !== slug) {
      console.log(slug);
      getPost(slug).then(resp => {
        setPost(resp.data.data);
      });
    }
  }, [slug, setPost, post]);

  return (
    <>
      {post && (
        <div id="post-wrapper">
          <div id="post-category">
            <PostCategoryIcon category={category} large /> &mdash;{" "}
            {category.name}
          </div>
          <div id="post-header">
            <h1>{post.title}</h1>
          </div>
          <div
            id="post-content"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      )}
    </>
  );
};
