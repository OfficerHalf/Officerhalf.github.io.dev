import axios, { AxiosResponse } from 'axios';
import { BattlemapPage, BlogPost, ListResponse } from './app/blog/interfaces/blog.interface';
import { environment as env } from './environments/environment';
import { promises } from 'fs';

const butter = 'https://api.buttercms.com/v2';

function getPage<T>(endpoint: string, page: number | null = 1): Promise<AxiosResponse<ListResponse<T>>> {
  return axios.get<ListResponse<T>>(endpoint, { params: { page }, headers: { Authorization: `Token ${env.butter}` } });
}

async function getAllPages<T>(endpoint: string): Promise<T[]> {
  let next_page: number | null = 1;
  let results: T[] = [];
  while (next_page !== null) {
    const response: AxiosResponse<ListResponse<T>> = await getPage<T>(endpoint, next_page);
    next_page = response.data.meta.next_page;
    results = [...results, ...response.data.data];
  }
  return results;
}

async function getPostList() {
  const postList = await getAllPages<BlogPost>(`${butter}/posts/`);
  const postMap: Record<string, number> = {};
  postList.forEach((post, index) => {
    postMap[post.slug] = index;
  });
  await promises.writeFile('./src/.postlist.json', JSON.stringify(postList), 'utf-8');
  await promises.writeFile('./src/.postmap.json', JSON.stringify(postMap), 'utf-8');
}

async function getMapList() {
  const battlemapList = await getAllPages<BattlemapPage>(`${butter}/pages/battlemap`);
  const battlemapMap: Record<string, number> = {};
  battlemapList.forEach((map, index) => {
    battlemapMap[map.slug] = index;
  });
  await promises.writeFile('./src/.battlemaplist.json', JSON.stringify(battlemapList), 'utf-8');
  await promises.writeFile('./src/.battlemapmap.json', JSON.stringify(battlemapMap), 'utf-8');
}

getPostList();
getMapList();
