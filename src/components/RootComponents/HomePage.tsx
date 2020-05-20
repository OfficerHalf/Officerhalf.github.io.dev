/** @jsx jsx */
import React from 'react';
import { postList } from '../../util/cms';
import { BlogPost } from '../../types/cms';
import { Post } from '../Blog/Post';
import { css, jsx } from '@emotion/core';

const postListStyle = css`
  max-width: 900px;
`;

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
    <div css={postListStyle}>
      {posts.map(p => (
        <Post post={p} />
      ))}
    </div>
  );
};
