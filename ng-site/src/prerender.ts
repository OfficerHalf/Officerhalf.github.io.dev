import axios from 'axios';
import { ListResponse } from './app/blog/interfaces/blog.interface';
import { environment as env } from './environments/environment';
import { promises } from 'fs';

const getPostList = async () => {
  const response = await axios.get<ListResponse>('https://api.buttercms.com/v2/posts/', {
    headers: { Authorization: `Token ${env.butter}` }
  });
  // const response = await (butter.post.list({ excludeBody: true }) as Promise<ApiResponse<ListResponse>>);
  const posts = response.data.data;
  await promises.writeFile('./.routefile', posts.map(p => `/blog/post/${p.slug}`).join('\n'), 'utf-8');
};

getPostList();
