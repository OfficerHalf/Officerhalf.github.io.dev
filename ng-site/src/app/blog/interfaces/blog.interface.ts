export interface Ref {
  name: string;
  slug: string;
}

export interface Author {
  first_name: string;
  last_name: string;
  slug: string;
  email: string | null;
  bio: string | null;
  title: string | null;
  linkedin_url: string | null;
  facebook_url: string | null;
  pinterest_url: string | null;
  instagram_url: string | null;
  twitter_handle: string | null;
  profile_image: string | null;
}

export interface BlogPostMetadata {
  url: string;
  created: string;
  published: string;
  author: Author;
  categories: Ref[];
  tags: Ref[];
  featured_image: string | null;
  featured_image_alt: string | null;
  slug: string;
  title: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  status: string;
}

export interface BlogPost extends BlogPostMetadata {
  body: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  featured_image: string | null;
}

export interface ListResponse {
  meta: {
    count: number;
    next_page: string | null;
    previous_page: string | null;
  };
  data: BlogPost[];
}

export interface RetrieveResponse {
  meta: {
    next_post: PostSummary | null;
    previous_post: PostSummary | null;
  };
  data: BlogPost;
}

export interface ApiResponse<T> {
  data: T;
}
