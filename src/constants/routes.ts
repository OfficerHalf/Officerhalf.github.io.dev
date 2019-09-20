export const routes = {
  app: {
    root: '/',
    home: {
      base: '/'
    },
    contact: {
      base: '/contact'
    },
    project: {
      base: '/project',
      alloy: {
        base: '/project/alloy'
      }
    }
  },
  dndTools: {
    root: '/dnd'
  }
};

export enum AppRoute {
  Home = '/',
  Contact = '/contact'
}
