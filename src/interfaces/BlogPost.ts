import { Author } from "./Author";
import { Tag } from "./Tag";
import { Category } from "./Category";

export interface BlogPost {
  slug: string;
  page_type: string;
  fields: {
    title: string;
    subtitle: string;
    body: string;
    summary: string;
    seo_title: string;
    meta_description: string;
    publish_date: string;
    tags: Tag[];
    category: Category;
    card_image: string;
    header_image: string;
  };
}
