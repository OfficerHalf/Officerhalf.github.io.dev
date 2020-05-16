import React from 'react';
import { postList } from '../../util/cms';
import { BlogPost } from '../../types/cms';

export const HomePage: React.FC = props => {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      const response = await postList();
      setPosts(response.data.data);
    };
    fetch();
  }, []);
  return (
    <div>
      {posts.map(p => (
        <div dangerouslySetInnerHTML={{ __html: p.body }} />
      ))}
    </div>
  );
};
