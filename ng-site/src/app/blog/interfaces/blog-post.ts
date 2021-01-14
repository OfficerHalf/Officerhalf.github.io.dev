// Models
export interface KeyValuePair {
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
