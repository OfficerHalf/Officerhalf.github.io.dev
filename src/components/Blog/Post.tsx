import React from 'react';
import { BlogPost } from '../../types/cms';
import { usePrismjs } from '../../hooks/usePrismjs';

interface PostProps {
  post: BlogPost;
}

export const Post: React.FC<PostProps> = props => {
  const { body, title, published } = props.post;
  const date = new Date(published);
  const bodyRef = React.useRef<HTMLDivElement>(null);
  usePrismjs(bodyRef, ['line-numbers']);

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
      <div ref={bodyRef} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
