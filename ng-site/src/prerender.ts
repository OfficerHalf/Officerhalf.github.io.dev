import axios from 'axios';
import { BlogPost, ListResponse } from './app/blog/interfaces/blog.interface';
import { environment as env } from './environments/environment';
import { promises } from 'fs';

const getPostList = async () => {
  const response = await axios.get<ListResponse>('https://api.buttercms.com/v2/posts/', {
    headers: { Authorization: `Token ${env.butter}` }
  });
  // const response = await (butter.post.list({ excludeBody: true }) as Promise<ApiResponse<ListResponse>>);
  const postList = response.data.data;
  const postMap: Record<string, number> = {};
  postList.forEach((post, index) => {
    postMap[post.slug] = index;
  });
  await promises.writeFile('./src/.postlist.json', JSON.stringify(postList), 'utf-8');
  await promises.writeFile('./src/.postmap.json', JSON.stringify(postMap), 'utf-8');
};

getPostList();
