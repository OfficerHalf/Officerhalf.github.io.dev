import { BlogPost } from './blog-post';

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

export interface ButterListOptions {
  page?: number;
  page_size?: number;
  preview?: 1;
  exclude_body?: boolean;
  author_slug?: string;
  category_slug?: string;
  tag_slug?: string;
}
