import { ProjectProps } from '../components/Project';

export const contactForm =
  'https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true';

export const projects: ProjectProps[] = [
  {
    title: 'Homebrewery Markdown Preview',
    description:
      'An extension for Visual Studio Code that formats the markdown preview in the same manner as the Homebrewery',
    link:
      'https://marketplace.visualstudio.com/items?itemName=officerhalf.homebrewery-vscode'
  },
  {
    title: 'Alloy Theme',
    description:
      'A more monochromatic, desaturated Monokai theme for Visual Studio Code, PrismJS, and Conemu.',
    link:
      'https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme'
  }
];
