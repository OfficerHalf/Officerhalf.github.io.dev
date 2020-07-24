import React from 'react';
import { PostList } from '../PostList';
import { useRouteData } from 'react-static';
import { CategoryRouteData } from '../../../../types/static';

export const Category: React.FC = props => {
  const { posts } = useRouteData<CategoryRouteData>();
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Category;
