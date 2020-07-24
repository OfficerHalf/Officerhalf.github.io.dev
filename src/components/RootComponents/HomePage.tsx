/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { PostList } from '../Blog/PostList';
import { BlogRouteData } from '../../../types/static';
import { useRouteData } from 'react-static';

export const HomePage: React.FC = props => {
  const { posts } = useRouteData<BlogRouteData>();

  return (
    <div style={{ height: '100%' }}>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
