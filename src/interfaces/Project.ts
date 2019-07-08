export interface Project {
  slug: string;
  pageType: string;
  fields: {
    title: string;
    live_link?: string;
    source_link?: string;
    technologies: string[];
    my_role?: string;
    challenges?: string;
    solution?: string;
    features: string;
    icon: string;
    preview_image: string;
    summary: string;
  };
}
