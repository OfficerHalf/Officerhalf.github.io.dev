import queryString from 'query-string';

export const routes = {
  about: '/about',
  contact: '/contact',
  uses: '/uses',
  blog: {
    base: '/blog',
    post: {
      template: '/blog/post/:slug',
      link: (slug: string) => `/blog/post/${slug}`
    },
    category: {
      template: '/blog/category/:slug',
      link: (slug: string) => `/blog/category/${slug}`
    },
    tag: {
      template: '/blog/tag/:slug',
      link: (slug: string) => `/blog/tag/${slug}`
    },
    search: {
      template: '/blog/search',
      link: (query: string) => queryString.stringifyUrl({ query: { search: query }, url: '/blog/search' })
    }
  },
  project: {
    base: '/project',
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
