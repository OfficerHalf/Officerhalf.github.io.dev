export interface Project {
  slug: string;
  pageType: string;
  fields: {
    title: string;
    livePreview?: string;
    source?: string;
    technologies: string[];
    myRole?: string;
    challenges?: string;
    solution?: string;
    features: string;
  };
}
