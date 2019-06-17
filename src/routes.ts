export const routes = {
  home: {
    label: 'Home',
    href: '/',
    about: {
      href: '/#about',
      label: 'About'
    },
    contact: {
      href: '/#contact',
      label: 'Contact'
    }
  },
  blog: {
    href: '/blog',
    label: 'Blog'
  },
  projects: {
    label: 'Projects',
    alloy: { href: '/projects/alloy', label: 'Alloy VS Code Theme' },
    homebrewery: {
      href: '/projects/homebrewery',
      label: 'Homebrewery VS Code'
    },
    dungeonBuilder: {
      label: 'Dungeon Builder',
      maps: {
        href: '/projects/dungeon-builder/maps',
        label: 'Maps'
      },
      tilesets: {
        href: '/projects/dungeon-builder/tilesets',
        label: 'Tilesets'
      }
    }
  },
  tabletop: {
    label: 'Tabletop Tools',
    initiative: {
      href: '/dnd/initiative',
      label: 'Initiative Tracker'
    },
    generators: {
      href: '/dnd/loot-generators',
      label: 'Loot Generators'
    },
    spellbook: {
      href: '/dnd/spellbook',
      label: '5e Grimoire'
    }
  }
};
