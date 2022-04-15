import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog.interface';
import ObsidanExport from '../../../.obsidianExport.json';

interface NoteMeta {
  title: string;
  slug: string;
  frontmatter: { [key: string]: any };
  tags: string[];
  stat: any;
  path: string;
}

interface ExportedNote {
  meta: NoteMeta;
  content: string;
}

interface JSONExport {
  meta: NoteMeta[];
  notes: Record<string, ExportedNote>;
}

@Injectable({
  providedIn: 'root'
})
export class BlogAdapterService {
  private jsonExport: JSONExport = ObsidanExport;

  getPostList(): BlogPost[] {
    const posts: BlogPost[] = [];
    this.jsonExport.meta.forEach((noteMeta) => {
      posts.push(this.obsidianToButter(this.jsonExport.notes[noteMeta.slug]));
    });
    return posts;
  }

  getPostMap(): Record<string, number> {
    const postMap: Record<string, number> = {};
    this.jsonExport.meta.forEach((meta, index) => {
      postMap[meta.slug] = index;
    });
    return postMap;
  }

  private obsidianToButter(exported: ExportedNote): BlogPost {
    return {
      body: exported.content,
      title: exported.meta.title,
      slug: exported.meta.slug,
      published: new Date().toDateString(),
      summary: '',
      path: exported.meta.path
    } as BlogPost;
  }
}
