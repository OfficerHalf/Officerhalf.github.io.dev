import butter from 'buttercms';
import { AxiosResponse } from 'axios';
import {
  ButterListResponse,
  BlogPost,
  ButterRetrieveResponse
} from '../types/cms';

const ButterApi = butter('9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081');

export function postList(): Promise<
  AxiosResponse<ButterListResponse<BlogPost[]>>
> {
  return ButterApi.post.list() as Promise<
    AxiosResponse<ButterListResponse<BlogPost[]>>
  >;
}

export function getPost(
  slug: string
): Promise<AxiosResponse<ButterRetrieveResponse>> {
  return ButterApi.post.retrieve(slug) as Promise<
    AxiosResponse<ButterRetrieveResponse>
  >;
}

export function parsePostDate(date: string): string {
  return new Date(date).toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  });
}
