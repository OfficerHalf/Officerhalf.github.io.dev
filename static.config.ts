import axios from 'axios';
import path from 'path';
import { postList } from './src/util/cms';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const resp = await postList();
    const posts = resp.data.data;
    return [
      {
        path: '/blog',
        getData: () => ({
          posts
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-emotion',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    'react-static-plugin-react-router',
    require.resolve('react-static-plugin-sitemap')
  ]
};
