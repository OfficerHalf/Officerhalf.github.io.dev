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
      },
      homebrewery: {
        base: '/project/homebrewery-preview'
      },
      userManagement: {
        base: '/work/user-management'
      },
      csrg: {
        base: '/work/service-registry'
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
