export interface ButterResponse<T> {
  data: T;
  meta: {
    count: number;
    previous_page: string | null;
    next_page: string | null;
  };
}
