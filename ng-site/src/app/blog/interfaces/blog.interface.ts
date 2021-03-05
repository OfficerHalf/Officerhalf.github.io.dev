export interface Ref {
  name: string;
  slug: string;
}

export enum BattlemapType {
  Dungeondraft = 'dungeondraft',
  Wonderdraft = 'wonderdraft',
  DungeonBuilder = 'dungeon-builder',
  Other = 'other'
}

export interface BasicMetadata {
  published: string;
  slug: string;
  updated: string;
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

export interface BattlemapPage extends BasicMetadata {
  name: string;
  page_type: 'battlemap';
  fields: {
    description: string;
    images: {
      title: string;
      map: string;
    }[];
    download_links: {
      text: string;
      url: string;
    }[];
    made_in: BattlemapType;
  };
}

export interface ListResponse<T> {
  meta: {
    count: number;
    next_page: number | null;
    previous_page: number | null;
  };
  data: T[];
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
