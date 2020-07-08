import queryString from 'query-string';

export const routes = {
  about: 'about',
  contact: 'contact',
  blog: {
    base: 'blog',
    post: {
      template: 'post/:slug',
      link: (slug: string) => `/blog/post/${slug}`
    },
    category: {
      template: 'category/:slug',
      link: (slug: string) => `/blog/category/${slug}`
    },
    tag: {
      template: 'tag/:slug',
      link: (slug: string) => `/blog/tag/${slug}`
    },
    search: {
      template: 'search',
      link: (query: string) => queryString.stringifyUrl({ query: { search: query }, url: '/blog/search' })
    }
  },
  project: {
    base: 'project',
    alloy: {
      base: 'alloy',
      link: '/project/alloy'
    },
    homebrewery: {
      base: 'homebrewery',
      link: '/project/homebrewery'
    }
  }
};
