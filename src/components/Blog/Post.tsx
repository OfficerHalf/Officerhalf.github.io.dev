import React from 'react';
import { BlogPost } from '../../types/cms';
import { usePrismjs } from '../../hooks/usePrismjs';
import { useParams } from 'react-router';
import { getPost, parsePostDate } from '../../util/cms';

export const Post: React.FC = props => {
  const [post, setPost] = React.useState<BlogPost>();
  const { slug } = useParams();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  usePrismjs(bodyRef, ['line-numbers']);

  React.useEffect(() => {
    const fetch = async () => {
      const resp = await getPost(slug);
      setPost(resp.data.data);
    };
    fetch();
  }, [slug]);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <h4>{parsePostDate(post.published)}</h4>
          <div ref={bodyRef} dangerouslySetInnerHTML={{ __html: post.body }} />
        </>
      )}
    </div>
  );
};
