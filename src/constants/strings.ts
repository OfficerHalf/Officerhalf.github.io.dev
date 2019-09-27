import { ProjectProps } from '../components/Project';
import { routes } from './routes';

export const contactForm =
  'https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true';

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
