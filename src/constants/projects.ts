import { ProjectProps } from '../components/Project';
import { routes } from './routes';
import { WorkProject } from '../interfaces/WorkProject';

export const projects: ProjectProps[] = [
  {
    title: 'Alloy',
    description:
      'A more monochromatic, desaturated Monokai theme for Visual Studio Code, PrismJS, and Conemu.',
    link: routes.app.project.alloy.base,
    linkType: 'Link'
  },
  {
    title: 'Homebrewery Markdown Preview',
    description:
      'An extension for Visual Studio Code that formats the markdown preview in the same manner as the Homebrewery',
    link: routes.app.project.homebrewery.base,
    linkType: 'Link'
  },
  {
    title: "The Captain's Hooks",
    description: 'A collection of useful React utility hooks.',
    link: 'https://www.npmjs.com/package/the-captains-hooks',
    linkType: 'a'
  }
];

export const work: WorkProject[] = [
  {
    cardProps: {
      title: 'User Management',
      description: '',
      link: routes.app.project.userManagement.base,
      linkType: 'Link'
    },
    challengesSolutions: '',
    description: '',
    images: [
      {
        src: `${process.env.PUBLIC_URL}/UserMan1.png`,
        alt: 'User Management main view'
      },
      {
        src: `${process.env.PUBLIC_URL}/UserMan2a.png`,
        alt: 'User Profile view'
      },
      {
        src: `${process.env.PUBLIC_URL}/UserMan3.png`,
        alt: 'Modify roles view'
      }
    ],
    myRole: '',
    technologies: [],
    company: 'Bentley Systems'
  },
  {
    cardProps: {
      title: 'Service Registry',
      description: '',
      link: routes.app.project.csrg.base,
      linkType: 'Link'
    },
    challengesSolutions: '',
    description: '',
    images: [],
    myRole: '',
    technologies: [],
    company: 'Bentley Systems'
  },
  {
    cardProps: {
      title: 'Bentley Web Components',
      description: '',
      link: routes.app.project.bwc.base,
      linkType: 'Link'
    },
    challengesSolutions: '',
    description: '',
    company: 'Bentley Systems',
    images: [],
    myRole: '',
    technologies: []
  }
];
