interface PartialPostMeta {
  slug: string;
  title: string;
  featured_image: string;
}

export interface ButterRetrieveMeta {
  next_post: PartialPostMeta | null;
  previous_post: PartialPostMeta | null;
}
