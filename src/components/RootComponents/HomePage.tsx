/** @jsx jsx */
import React from 'react';
import { postList } from '../../util/cms';
import { BlogPost } from '../../types/cms';
import { Post } from '../Blog/Post';
import { css, jsx } from '@emotion/core';
import theme from '../../util/theme';
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
    <div>
      <PostList posts={posts} />
    </div>
  );
};
