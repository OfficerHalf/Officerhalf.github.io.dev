export const routes = {
  app: {
    base: "/",
    blog: {
      base: "/blog",
      category: (category?: string) =>
        category !== undefined
          ? `/blog/category/${category}`
          : "/blog/category/:category",
      post: (slug?: string) =>
        slug !== undefined ? `/blog/post/${slug}` : `/blog/post/:slug`
    }
  }
};
