import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { getPost } from "../../api/Butter";
import { BlogPost as Post } from "../../interfaces/BlogPost";

export const BlogPost: React.FC<RouteComponentProps<{
  slug: string;
}>> = props => {
  const [post, setPost] = React.useState<Post>();
  const { slug } = props.match.params;

  React.useEffect(() => {
    if (!post || post.slug !== slug) {
      console.log(slug);
      getPost(slug).then(resp => {
        setPost(resp.data.data);
      });
    }
  }, [slug, setPost, post]);

  return <>{post && <div dangerouslySetInnerHTML={{ __html: post.body }} />}</>;
};
