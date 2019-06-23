import { Author } from "./Author";
import { Tag } from "./Tag";

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
  tags: Tag[];
  categories: Tag[];
}
