import { SafeHtml } from '@angular/platform-browser';
import { BasicMetadata, Ref } from './butter.interface';

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

export interface BlogPostMetadata extends BasicMetadata {
  status: string;
  url: string;
  created: string;
  author: Author;
  categories: Ref[];
  tags: Ref[];
  featured_image: string | null;
  featured_image_alt: string | null;
  title: string;
  summary: string;
  seo_title: string;
  meta_description: string;
}

export interface BlogPost extends BlogPostMetadata {
  body: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  featured_image: string | null;
}

export interface RetrieveResponseMeta {
  next_post: PostSummary | null;
  previous_post: PostSummary | null;
}

export interface RetrieveResponse {
  meta: RetrieveResponseMeta;
  data: BlogPost;
}

export interface BlogPostExtendedData {
  data: BlogPost;
  body: SafeHtml;
  meta: RetrieveResponseMeta;
  dates: {
    created: Date;
    published: Date;
    updated: Date;
  };
}
