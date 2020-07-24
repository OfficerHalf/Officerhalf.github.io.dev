/** @jsx jsx */
import React from 'react';
import { Tag } from '../Icons';
import { KeyValuePair } from '../../../types/cms';
import { Link } from '@reach/router';
import { routes } from '../../util/routes';
import { css, jsx } from '@emotion/core';
import { staticTheme } from '../../util/theme';
import { ThemeContext } from '../../store/ThemeContext';

const { space, typography } = staticTheme;

interface TagListProps {
  tags?: KeyValuePair[];
}

export const TagList = React.forwardRef<
  HTMLDivElement,
  TagListProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  const { tags = [], ...rest } = props;
  const { theme } = React.useContext(ThemeContext);
  const { textColor } = theme;
  const tagIconStyle = css`
    fill: ${textColor.accentText};
    width: ${space.m};
    height: ${space.m};
  `;

  const tagLinkStyle = css`
    font-size: ${typography.small.size};
    color: ${textColor.accentText};
    text-decoration: none;
    margin-left: ${space.s};
    &:hover {
      text-decoration: underline;
    }
  `;

  if (tags.length === 0) {
    return null;
  }
  return (
    <div
      ref={ref}
      css={css`
        display: flex;
        align-items: center;
      `}
      {...rest}>
      <Tag css={tagIconStyle} />
      {tags.map(t => (
        <Link css={tagLinkStyle} key={t.slug} to={routes.blog.tag.link(t.slug)}>
          {t.name}
        </Link>
      ))}
    </div>
  );
});
