export interface Ref {
  name: string;
  slug: string;
}

export interface BasicMetadata {
  published: string;
  slug: string;
  updated: string;
}

export interface ListResponse<T> {
  meta: {
    count: number;
    next_page: number | null;
    previous_page: number | null;
  };
  data: T[];
}

export interface ApiResponse<T> {
  data: T;
}
