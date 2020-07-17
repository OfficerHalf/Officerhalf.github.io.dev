/** @jsx jsx */
import React, { Fragment } from 'react';
import { MenuItem } from '../../../types/nav';
import { css, jsx } from '@emotion/core';
import { HorizontalItem } from './HorizontalItem';
import { SearchBox } from './SearchBox';
import { useNavigate } from '@reach/router';
import { routes } from '../../util/routes';

interface HorizontalProps {
  items: MenuItem[];
}

export const Horizontal: React.FC<HorizontalProps> = props => {
  const { items } = props;
  const navigate = useNavigate();
  return (
    <Fragment>
      {/* <SearchBox onEnter={query => navigate(routes.blog.search.link(query))} maxWidth="250px" /> */}
      <ul
        css={css`
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
        `}>
        {items.map(item => (
          <HorizontalItem key={item.id || item.text} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
