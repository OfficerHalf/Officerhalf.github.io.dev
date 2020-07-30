import React from 'react';
import path from 'path';
// import { KeyValuePair } from 'types/cms';
// import { CategoryRouteData, BlogRouteData, PostRouteData, TagRouteData } from 'types/static';
// import { ReactStaticConfig } from 'react-static';
import butter from 'buttercms';
// import { AxiosResponse } from 'axios';
// import { ButterListResponse, BlogPost, ButterRetrieveResponse, ButterListOptions } from '../../types/cms';

const ButterApi = butter('9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081');

function postList(options /*?: ButterListOptions*/) /*: Promise<AxiosResponse<ButterListResponse<BlogPost[]>>>*/ {
  return ButterApi.post.list(options) /*as Promise<AxiosResponse<ButterListResponse<BlogPost[]>>>*/;
}

function getPost(slug /*: string*/) /*: Promise<AxiosResponse<ButterRetrieveResponse>>*/ {
  return ButterApi.post.retrieve(slug) /* as Promise<AxiosResponse<ButterRetrieveResponse>>*/;
}

// function searchPosts(query/*: string*/)/*: Promise<AxiosResponse<ButterListResponse<BlogPost[]>>>*/ {
//   return ButterApi.post.search(query)/* as Promise<AxiosResponse<ButterListResponse<BlogPost[]>>>*/;
// }

// function parsePostDate(date/*: string*/)/*: string*/ {
//   return new Date(date).toLocaleString(undefined, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     hour12: true,
//     minute: 'numeric'
//   });
// }

const routes = {
  about: 'about',
  contact: 'contact',
  blog: {
    base: 'blog',
    post: {
      template: '/blog/post/:slug',
      link: (slug /*: string*/) => `/blog/post/${slug}`
    },
    category: {
      template: '/blog/category/:slug',
      link: (slug /*: string*/) => `/blog/category/${slug}`
    },
    tag: {
      template: '/blog/tag/:slug',
      link: (slug /*: string*/) => `/blog/tag/${slug}`
    } /*,
    search: {
      template: '/blog/search',
      link: (query: string) => queryString.stringifyUrl({ query: { search: query }, url: '/blog/search' })
    }*/
  },
  project: {
    base: 'project',
    alloy: {
      base: '/project/alloy',
      link: '/project/alloy'
    },
    homebrewery: {
      base: '/project/homebrewery',
      link: '/project/homebrewery'
    }
  }
};

const config /*: ReactStaticConfig*/ = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    const resp = await postList();
    const posts = resp.data.data;
    const _categories /*: Set<KeyValuePair>*/ = new Set();
    const _tags /*: Set<KeyValuePair>*/ = new Set();
    posts.forEach(post => {
      post.categories.forEach(category => {
        _categories.add(category);
      });
      post.tags.forEach(tag => {
        _tags.add(tag);
      });
    });
    const categories = Array.from(_categories);
    const tags = Array.from(_tags);
    return [
      {
        path: '/',
        getData: () /*: BlogRouteData*/ => ({
          posts
        }),
        template: 'src/components/RootComponents/HomePage',
        children: [
          ...posts.map((post, index) => ({
            path: routes.blog.post.link(post.slug),
            template: 'src/components/Blog/Views/Post',
            getData: () /*: PostRouteData*/ => {
              return {
                post: post,
                previous:
                  index !== posts.length - 1
                    ? { slug: posts[index + 1].slug, name: posts[index + 1].title }
                    : undefined,
                next: index !== 0 ? { slug: posts[index - 1].slug, name: posts[index - 1].title } : undefined
              };
            }
          })),
          ...categories.map(category => ({
            path: routes.blog.category.link(category.slug),
            template: 'src/components/Blog/Views/Category',
            getData: () /*: CategoryRouteData*/ => ({
              category,
              posts: posts.filter(
                p => p.categories.findIndex(c => c.slug.toLowerCase() === category.slug.toLowerCase()) !== -1
              )
            })
          })),
          ...tags.map(tag => ({
            path: routes.blog.tag.link(tag.slug),
            template: 'src/components/Blog/Views/Tag',
            getData: () /*: TagRouteData*/ => ({
              tag,
              posts: posts.filter(p => p.tags.findIndex(t => t.slug.toLowerCase() === tag.slug.toLowerCase()) !== -1)
            })
          }))
        ]
      },
      {
        path: routes.about,
        template: 'src/components/RootComponents/AboutPage/AboutPage'
      },
      {
        path: routes.contact,
        template: 'src/components/RootComponents/ContactPage'
      },
      { path: routes.project.alloy.base, template: 'src/components/Projects/Alloy/Alloy' },
      { path: routes.project.homebrewery.base, template: 'src/components/Projects/Homebrewery/Homebrewery' },
      {
        path: 'dnd',
        template: 'src/components/RootComponents/DnDTools',
        children: [
          { path: 'randomLoot', template: 'src/components/DnDTools/RandomLoot' },
          { path: 'conditions', template: 'src/components/DnDTools/Conditions' }
        ]
      },
      {
        path: '404',
        template: 'src/components/RootComponents/404.tsx'
      }
    ];
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-emotion',
    'react-static-plugin-sass',
    'react-static-plugin-reach-router',
    require.resolve('react-static-plugin-sitemap')
  ],
  extractCssChunks: true,
  inlineCss: true
};

export default config;
