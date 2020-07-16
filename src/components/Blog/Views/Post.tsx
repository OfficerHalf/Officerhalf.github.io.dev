/** @jsx jsx */
import React, { Fragment } from 'react';
import { BlogPost, ButterRetrieveMeta } from '../../../../types/cms';
import { usePrismjs } from '../../../../backup/src/hooks/usePrismjs';
import { useParams } from 'react-router';
import { getPost, parsePostDate } from '../../../util/cms';
import { css, jsx } from '@emotion/core';
import { theme } from '../../../util/theme';
import { Link } from 'react-router-dom';
import { routes } from '../../../util/routes';
import { Tag } from '../../Icons/Tag';
import { Small, Headline, Body } from '../../Typography';
import { Helmet } from 'react-helmet-async';
import { useImageModal } from '../../../../backup/src/hooks/useImageModal';

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
  const [post, setPost] = React.useState<BlogPost>();
  const [meta, setMeta] = React.useState<ButterRetrieveMeta>();
  const { slug } = useParams();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  usePrismjs(bodyRef, ['line-numbers']);
  const imageOutlet = useImageModal(bodyRef);

  const category = post && post.categories.length > 0 ? post.categories[0] : undefined;

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
          {meta.previous_post && (
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
                to={routes.blog.post.link(meta.previous_post.slug)}>
                {meta.previous_post.title}
              </Link>
            </Body>
          )}
          {meta.next_post && (
            <Body>
              Next:&nbsp;
              <Link
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                to={routes.blog.post.link(meta.next_post.slug)}>
                {meta.next_post.title}
              </Link>
            </Body>
          )}
        </Fragment>
      )}
      {imageOutlet}
    </div>
  );
};
