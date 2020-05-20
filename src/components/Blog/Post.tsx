import React from 'react';
import { BlogPost } from '../../types/cms';

interface PostProps {
  post: BlogPost;
}

export const Post: React.FC<PostProps> = props => {
  const { body, title, published } = props.post;
  const date = new Date(published);

  return (
    <div>
      <h1>{title}</h1>
      <h4>
        {date.toLocaleString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          hour12: true,
          minute: 'numeric'
        })}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
