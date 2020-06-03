/** @jsx jsx */
import React, { Fragment } from 'react';
import { BlogPost, ButterRetrieveMeta } from '../../types/cms';
import { usePrismjs } from '../../hooks/usePrismjs';
import { useParams } from 'react-router';
import { getPost, parsePostDate } from '../../util/cms';
import { css, jsx } from '@emotion/core';
import { theme } from '../../util/theme';
import { Link } from 'react-router-dom';
import { routes } from '../../util/routes';
import { Tag } from '../Icons/Tag';
import { Small } from '../Typography';

const { space, color } = theme;

const wrapperStyle = css`
  margin-top: ${space.l};
  margin-bottom: ${space.m};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const titleStyle = css`
  margin-bottom: ${space.xs};
`;

const dateStyle = css`
  margin-bottom: ${space.sm};
`;

const bodyStyle = css`
  margin-bottom: ${space.l};

  p {
    margin-bottom: ${space.m};
    margin-top: ${space.xs};
  }
  h1,
  h2 {
    margin-bottom: ${space.xs};
  }
  h3,
  h4 {
    margin-bottom: ${space.m};
  }
`;

const tagStyle = css`
  display: flex;
  margin-bottom: ${space.xs};
  .tag-icon {
    width: ${space.m};
    height: ${space.m};
    fill: ${color.lightGray};
  }
  .tag-link {
    color: ${color.mutedText};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:not(:last-child) {
      margin-right: ${space.xs};
    }
    &:not(:first-child) {
      margin-left: ${space.xs};
    }
  }
`;

const nextPrevStyle = css`
  margin-bottom: ${space.xs};
`;

export const Post: React.FC = props => {
  const [post, setPost] = React.useState<BlogPost>();
  const [meta, setMeta] = React.useState<ButterRetrieveMeta>();
  const { slug } = useParams();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  usePrismjs(bodyRef, ['line-numbers']);

  const category =
    post && post.categories.length > 0 ? post.categories[0] : undefined;

  React.useEffect(() => {
    const fetch = async () => {
      const resp = await getPost(slug);
      setPost(resp.data.data);
      setMeta(resp.data.meta);
    };
    fetch();
  }, [slug]);

  return (
    <div css={wrapperStyle}>
      {post && meta && (
        <Fragment>
          <h1 css={titleStyle}>{post.title}</h1>
          <h4 css={dateStyle}>
            {parsePostDate(post.published)}
            {category && (
              <Fragment>
                &mdash;
                <Link to={routes.blog.category.link(category.slug)}>
                  {category.name}
                </Link>
              </Fragment>
            )}
          </h4>
          <div
            css={bodyStyle}
            ref={bodyRef}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          {post.tags.length > 0 && (
            <div css={tagStyle}>
              <Tag className="tag-icon" />
              {post.tags.map(t => (
                <Link
                  className="tag-link"
                  key={t.slug}
                  to={routes.blog.tag.link(t.slug)}>
                  <Small>{t.name}</Small>
                </Link>
              ))}
            </div>
          )}
          {meta.previous_post && (
            <div css={nextPrevStyle}>
              Previous:&nbsp;
              <Link to={routes.blog.post.link(meta.previous_post.slug)}>
                {meta.previous_post.title}
              </Link>
            </div>
          )}
          {meta.next_post && (
            <div css={nextPrevStyle}>
              Next:&nbsp;
              <Link to={routes.blog.post.link(meta.next_post.slug)}>
                {meta.next_post.title}
              </Link>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
