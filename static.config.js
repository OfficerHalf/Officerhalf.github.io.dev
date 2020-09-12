import React from 'react';
import path from 'path';
import butter from 'buttercms';
import { promises } from 'fs';
import XLSX from 'xlsx';
import { config as dotEnv } from 'dotenv';

dotEnv();

const ButterApi = butter('9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081');

// Get all pokemon + species
// const pokemonCollection: { [id: number]: Pokemon } = {};
// const speciesCollection: { [id: number]: PokemonSpecies } = {};

async function loadPokemonData() {
  const pokemonContent = await promises.readFile('./data/Pokemon.json', { encoding: 'utf8' });
  return JSON.parse(pokemonContent);
}

function postList(options) {
  return ButterApi.post.list(options);
}

function getPost(slug) {
  return ButterApi.post.retrieve(slug);
}

const routes = {
  about: 'about',
  contact: 'contact',
  uses: 'uses',
  blog: {
    base: 'blog',
    post: {
      template: '/blog/post/:slug',
      link: slug => `/blog/post/${slug}`
    },
    category: {
      template: '/blog/category/:slug',
      link: slug => `/blog/category/${slug}`
    },
    tag: {
      template: '/blog/tag/:slug',
      link: slug => `/blog/tag/${slug}`
    }
  },
  project: {
    base: 'project',
    alloy: {
      base: '/project/alloy',
      link: '/project/alloy'
    },
    homebrewery: {
      base: '/project/homebrewery',
      link: '/project/homebrewery'
    }
  }
};

const config = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async () => {
    const config = { ...(await loadPokemonData()) };
    config.pokemonFirebaseConfig = {
      apiKey: process.env.POKEMON_FIREBASE_apiKey,
      authDomain: process.env.POKEMON_FIREBASE_authDomain,
      databaseURL: process.env.POKEMON_FIREBASE_databaseURL,
      projectId: process.env.POKEMON_FIREBASE_projectId,
      storageBucket: process.env.POKEMON_FIREBASE_storageBucket,
      messagingSenderId: process.env.POKEMON_FIREBASE_messagingSenderId,
      appId: process.env.POKEMON_FIREBASE_appId
    };
    return config;
  },
  getRoutes: async () => {
    // Blog
    const resp = await postList();
    const posts = resp.data.data;
    const _categories = new Set();
    const _tags = new Set();
    posts.forEach(post => {
      post.categories.forEach(category => {
        _categories.add(category);
      });
      post.tags.forEach(tag => {
        _tags.add(tag);
      });
    });
    const categories = Array.from(_categories);
    const tags = Array.from(_tags);

    return [
      {
        path: '/',
        getData: () => ({
          posts
        }),
        template: 'src/components/RootComponents/HomePage',
        children: [
          ...posts.map((post, index) => ({
            path: routes.blog.post.link(post.slug),
            template: 'src/components/Blog/Views/Post',
            getData: () => {
              return {
                post: post,
                previous:
                  index !== posts.length - 1
                    ? { slug: posts[index + 1].slug, name: posts[index + 1].title }
                    : undefined,
                next: index !== 0 ? { slug: posts[index - 1].slug, name: posts[index - 1].title } : undefined
              };
            }
          })),
          ...categories.map(category => ({
            path: routes.blog.category.link(category.slug),
            template: 'src/components/Blog/Views/Category',
            getData: () => ({
              category,
              posts: posts.filter(
                p => p.categories.findIndex(c => c.slug.toLowerCase() === category.slug.toLowerCase()) !== -1
              )
            })
          })),
          ...tags.map(tag => ({
            path: routes.blog.tag.link(tag.slug),
            template: 'src/components/Blog/Views/Tag',
            getData: () => ({
              tag,
              posts: posts.filter(p => p.tags.findIndex(t => t.slug.toLowerCase() === tag.slug.toLowerCase()) !== -1)
            })
          }))
        ]
      },
      {
        path: routes.about,
        template: 'src/components/RootComponents/AboutPage'
      },
      {
        path: routes.contact,
        template: 'src/components/RootComponents/ContactPage'
      },
      {
        path: routes.uses,
        template: 'src/components/RootComponents/Uses'
      },
      { path: routes.project.alloy.base, template: 'src/components/Projects/Alloy/Alloy' },
      { path: routes.project.homebrewery.base, template: 'src/components/Projects/Homebrewery/Homebrewery' },
      {
        path: 'dnd',
        template: 'src/components/RootComponents/DnDTools',
        children: [
          {
            path: 'randomloot',
            template: 'src/components/DnDTools/RandomLoot',
            getData: async () => {
              console.log('Reading DnDData');
              const workbook = XLSX.readFile('data/DnDData.xlsx');
              const lootSheet = workbook.Sheets['Loot'];
              const records = XLSX.utils.sheet_to_json(lootSheet);
              const _lootTags = new Set();
              const _lootTypes = new Set();
              const loot = records.map(r => {
                const tags = r.tags.split(';');
                tags.forEach(t => _lootTags.add(t));
                _lootTypes.add(r.type);
                return {
                  type: r.type,
                  name: r.name,
                  value: r.value,
                  description: r.description,
                  tags,
                  minCR: r.minCR,
                  source: r.source
                };
              });
              console.log(`Got ${loot.length} records.`);
              return { loot, lootTags: Array.from(_lootTags), lootTypes: Array.from(_lootTypes) };
            }
          },
          { path: 'conditions', template: 'src/components/DnDTools/Conditions' }
        ]
      },
      {
        path: '404',
        template: 'src/components/RootComponents/404.tsx'
      }
    ];
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-emotion',
    'react-static-plugin-sass',
    'react-static-plugin-reach-router',
    require.resolve('react-static-plugin-sitemap')
  ],
  extractCssChunks: true,
  inlineCss: true
};

export default config;
