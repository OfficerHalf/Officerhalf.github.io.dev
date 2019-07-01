export const routes = {
  home: {
    base: "/"
  },
  contact: {
    base: "/contact"
  },
  projects: {
    base: "/projects"
  },
  blog: {
    base: "/blog",
    post: {
      base: "/blog/post",
      template: "/blog/post/:slug",
      value: (slug: string) => `/blog/post/${slug}`
    },
    category: {
      base: "/blog/category",
      template: "/blog/category/:cat",
      value: (cat: string) => `/blog/category/${cat}`
    },
    tag: {
      base: "/blog/tag",
      template: "/blog/tag/:tag",
      value: (tag: string) => `/blog/tag/${tag}`
    }
  }
};
