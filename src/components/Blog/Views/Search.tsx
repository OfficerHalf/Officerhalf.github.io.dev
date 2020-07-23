import React from 'react';
import { PostList } from '../PostList';
import { searchPosts } from '../../../util/cms';
import { BlogPost } from '../../../../types/cms';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

export const Search: React.FC = props => {
  const [posts, setPosts] = React.useState<BlogPost[]>();
  const { search } = useLocation();
  const query = React.useMemo(() => queryString.parse(search), [search]);

  React.useEffect(() => {
    const fetch = async () => {
      if (query.search && typeof query.search === 'string') {
        const response = await searchPosts(query.search);
        setPosts(response.data.data);
      }
    };
    fetch();
  }, [query.search]);

  return <div>{posts && <PostList posts={posts} />}</div>;
};

export default Search;
