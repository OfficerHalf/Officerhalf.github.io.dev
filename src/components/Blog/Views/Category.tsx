import React from 'react';
import { PostList } from '../PostList';
import { useParams } from 'react-router';
import { postList } from '../../../util/cms';
import { BlogPost } from '../../../types/cms';

export const Category: React.FC = props => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const { slug } = useParams();

  React.useEffect(() => {
    const fetch = async () => {
      const response = await postList({ category_slug: slug });
      setPosts(response.data.data);
    };
    fetch();
  }, [slug]);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};
