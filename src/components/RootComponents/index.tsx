/** @jsx jsx */
import React from 'react';
import { postList } from '../../util/cms';
import { BlogPost } from '../../../types/cms';
import { jsx } from '@emotion/core';
import { PostList } from '../Blog/PostList';

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
    <div style={{ height: '100%' }}>
      <PostList posts={posts} />
    </div>
  );
};
