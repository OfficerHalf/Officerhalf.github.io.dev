export const routes = {
  home: {
    base: "/"
  },
  projects: {
    base: "/projects"
  },
  blog: {
    base: "/blog",
    post: {
      template: "/blog/post/:slug",
      value: (slug: string) => `/blog/post/${slug}`
    }
  }
};
