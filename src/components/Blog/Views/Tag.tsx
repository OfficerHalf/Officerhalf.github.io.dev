import React from 'react';
import { PostList } from '../PostList';
import { useRouteData } from 'react-static';
import { TagRouteData } from 'types/static';

export const Tag: React.FC = props => {
  const { posts } = useRouteData<TagRouteData>();

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Tag;
