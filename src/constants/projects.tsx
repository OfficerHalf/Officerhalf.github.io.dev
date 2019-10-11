import * as React from 'react';
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
      description:
        'A directory administration application for managing users, groups, and roles.',
      link: routes.app.project.userManagement.base,
      linkType: 'Link'
    },
    challengesSolutions:
      'Changing schema, differing apis, inexperienced developers',
    description: (
      <>
        <p>
          When Bentley switched from an internal user database to a 3rd party
          solution, a new User Management application was created to replace the
          old solution. The new application was intended to have feature parity
          with the old,to be more responsive, and to better fit with the
          company's newer aesthetic style.
        </p>
      </>
    ),
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
    myRole: (
      <>
        <p>
          I was a developer on the project but took a lead position, managing
          and delegating tasks for a rotating group of devs of different
          experience levels. I guided the development team through architectural
          and design decisions to produce a consistent product.
        </p>
        <p></p>
        <p>
          It also was my job to know a little bit of everything and communicate
          between the team and the 3rd party providers we were working with.
        </p>
      </>
    ),
    technologies: [
      'ASP.Net Core',
      'React',
      'OIDC',
      'LDAP',
      'SCIMv2',
      'TypeScript',
      'C#'
    ],
    company: 'Bentley Systems',
    features: [
      {
        name: 'Manage Users',
        description: (
          <ul>
            <li>Create users manually or via CSV upload</li>
            <li>Update users manually or via CSV upload</li>
            <li>Delete users</li>
            <li>Assign roles to users</li>
          </ul>
        )
      },
      {
        name: 'Manage Groups',
        description: (
          <ul>
            <li>Create user groups</li>
            <li>Delete user groups</li>
            <li>Assign users to groups</li>
            <li>
              Groups can be simple user groups, allocation groups for reporting,
              or entitlement groups for billing.
            </li>
          </ul>
        )
      },
      {
        name: 'Manage Owned Domains',
        description: (
          <ul>
            <li>
              Company ABC can claim ownership 'abc.com' so that any users that
              register with an 'abc.com' email will automatically be associated
              with ABC's account.
            </li>
            <li>
              New users for an owned domain can be manually or automatically
              approved.
            </li>
          </ul>
        )
      }
    ]
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
    technologies: ['ASP.Net Core', 'React', 'OIDC', 'TypeScript', 'C#'],
    company: 'Bentley Systems',
    features: []
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
    technologies: ['React', 'TypeScript'],
    features: []
  }
];
