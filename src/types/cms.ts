// Responses
export interface ButterRetrieveResponse {
  meta: ButterRetrieveMeta;
  data: BlogPost;
}

export interface ButterListResponse<T> {
  meta: ButterListMeta;
  data: T;
}

// Metas
interface ButterListMeta {
  count: number;
  next_page: number | null;
  previous_page: number | null;
}

interface PartialPostMeta {
  slug: string;
  title: string;
  featured_image: string;
}

export interface ButterRetrieveMeta {
  next_post: PartialPostMeta | null;
  previous_post: PartialPostMeta | null;
}

// Models
interface KeyValuePair {
  name: string;
  slug: string;
}

interface Author {
  first_name: string;
  last_name: string;
  email: string;
  slug: string;
  bio: string;
  title: string;
  linkedin_url: string;
  facebook_url: string;
  instagram_url: string;
  pinterest_url: string;
  twitter_handle: string;
  profile_image: string;
}

export interface BlogPost {
  created: string;
  published: string;
  url: string;
  slug: string;
  featured_image: string;
  title: string;
  body: string;
  summary: string;
  seo_title: string;
  meta_description: string;
  status: string;
  author: Author;
  tags: KeyValuePair[];
  categories: KeyValuePair[];
}

export interface ButterListOptions {
  page?: number;
  page_size?: number;
  preview?: 1;
  exclude_body?: boolean;
  author_slug?: string;
  category_slug?: string;
  tag_slug?: string;
}
