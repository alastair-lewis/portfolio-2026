// ============================================================
// Portfolio content -- update this file to change site copy.
// Translations will be layered on in a later pass.
// ============================================================

import type {EducationEntry, ExperienceEntry, Project} from './types';

export const projects: Project[] = [
  {
    id: 'quickTransfers',
    title: 'Quick Transfers',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
    accentVariant: 3,
    stackLabel: 'React / TypeScript / GraphQL / Rails',
    tags: [
      {label: 'React', variant: 'coral'},
      {label: 'TypeScript', variant: 'teal'},
      {label: 'Rails', variant: 'coral'},
      {label: 'GraphQL', variant: 'orange'},
    ],
  },
  {
    id: 'genesis',
    title: 'Genesis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    accentVariant: 1,
    stackLabel: 'Angular / TypeScript / GraphQL / Redux',
    tags: [
      {label: 'Angular', variant: 'coral'},
      {label: 'TypeScript', variant: 'teal'},
      {label: 'GraphQL', variant: 'orange'},
      {label: 'Redux', variant: 'coral'},
    ],
  },
  {
    id: 'aeroplanDashboard',
    title: 'Aeroplan Dashboard',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
    accentVariant: 2,
    stackLabel: 'Angular / TypeScript / REST / Redux',
    tags: [
      {label: 'Angular', variant: 'coral'},
      {label: 'TypeScript', variant: 'teal'},
      {label: 'REST', variant: 'orange'},
      {label: 'Redux', variant: 'coral'},
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'Shopify',
    url: 'https://shopify.com',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: '2022 -- Present',
        location: 'Toronto, ON (Remote)',
        bullets: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
        ],
      },
    ],
  },
  {
    company: 'IBM',
    url: 'https://ibm.com',
    roles: [
      {
        title: 'Managing Technical Consultant',
        period: '2020 -- 2024',
        location: 'Toronto, ON',
        bullets: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
        
      },
      {
        title: 'Extreme Blue Technical Intern',
        period: '2019',
        location: 'Markham, ON',
        bullets: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        ],
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Queen's University",
    degree: 'B.Sc. (Hons.) Computing -- Software Design',
    years: '2012 -- 2016',
  },
  {
    institution: 'Crescent School',
    degree: 'Ontario Secondary School Diploma',
    years: '2008 -- 2012',
  },
];
