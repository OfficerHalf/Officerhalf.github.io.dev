/** @jsx jsx */
import React, { Fragment } from 'react';
import { usePrismjs } from '../../../hooks/usePrismjs';
import { Link } from '@reach/router';
import { parsePostDate } from '../../../util/cms';
import { css, jsx } from '@emotion/core';
import { theme } from '../../../util/theme';
import { routes } from '../../../util/routes';
import { Tag } from '../../Icons/Tag';
import { Small, Headline, Body } from '../../Typography';
import { Helmet } from 'react-helmet-async';
import { useImageModal } from '../../../hooks/useImageModal';
import { useRouteData } from 'react-static';
import { PostRouteData } from '../../../../types/static';

const { space, color } = theme;

const wrapperStyle = css`
  margin-bottom: ${space.m};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const tagStyle = css`
  display: flex;
  margin-top: ${space.sm};
  margin-bottom: ${space.xs};
  .tag-icon {
    width: ${space.m};
    height: ${space.m};
    fill: ${color.lightGray};
  }
  .tag-link {
    color: ${color.mutedText};
    text-decoration: none;
    margin-left: ${space.xs};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Post: React.FC = props => {
  const { post, next, previous } = useRouteData<PostRouteData>();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  usePrismjs(bodyRef, ['line-numbers']);
  const imageOutlet = useImageModal(bodyRef);

  const category = post && post.categories.length > 0 ? post.categories[0] : undefined;

  return (
    <div css={wrapperStyle}>
      <Fragment>
        <Helmet>
          <title>{`Nathan Smith - ${post.title}`}</title>
        </Helmet>
        <Headline>{post.title}</Headline>
        <h4>
          {parsePostDate(post.published)}
          {category && (
            <Fragment>
              &mdash;
              <Link to={routes.blog.category.link(category.slug)}>{category.name}</Link>
            </Fragment>
          )}
        </h4>
        <div ref={bodyRef} dangerouslySetInnerHTML={{ __html: post.body }} />
        {post.tags.length > 0 && (
          <div css={tagStyle}>
            <Tag className="tag-icon" />
            {post.tags.map(t => (
              <Link className="tag-link" key={t.slug} to={routes.blog.tag.link(t.slug)}>
                <Small>{t.name}</Small>
              </Link>
            ))}
          </div>
        )}
        {previous && (
          <Body>
            Previous:&nbsp;
            <Link
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })
              }
              to={routes.blog.post.link(previous.slug)}>
              {previous.name}
            </Link>
          </Body>
        )}
        {next && (
          <Body>
            Next:&nbsp;
            <Link
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
              to={routes.blog.post.link(next.slug)}>
              {next.name}
            </Link>
          </Body>
        )}
      </Fragment>
      {imageOutlet}
    </div>
  );
};

export default Post;
