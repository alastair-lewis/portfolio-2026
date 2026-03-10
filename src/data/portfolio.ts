// ============================================================
// Portfolio content -- update this file to change site copy.
// Translations will be layered on in a later pass.
// ============================================================

import type {EducationEntry, ExperienceEntry, Project} from './types';
import {generateGenesisUrl} from '../utils/generateGenesisUrl';

const sixMonthsFromNow = new Date();
sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

export const projects: Project[] = [
  {
    id: 'quickTransfers',
    title: 'Quick Transfers',
    logoFile: 'shopify_square.svg',
    description: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
    ],
    accentVariant: 3,
    role: 'Project Champion & Senior Engineer',
    comingSoon: true,
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
    logoFile: 'air_canada_square.svg',
    url: generateGenesisUrl({
      origin: 'YYZ',
      destination: 'YVR',
      departureDate: sixMonthsFromNow,
    }),
    description: [
      "Led the frontend team on Air Canada's next-generation booking engine, built by IBM on AWS.",
      "Now serving customers worldwide and accounting for Air Canada's primary revenue stream, Genesis delivers a rebuilt frontend for performance and accessibility, backed by a modular GraphQL API layer.",
      'The first Air Canada project to introduce Generative AI into the SDLC.',
    ],
    accentVariant: 1,
    role: 'Forward Deployed Lead Engineer',
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
    logoFile: 'air_canada_square.svg',
    url: 'https://www.aircanada.com/aeroplan/member/dashboard',
    urlNote: 'Login required',
    description: [
      "Delivered key functionality on Air Canada's Aeroplan loyalty dashboard.",
      'Contributed as the program grew from 4 million to 8.5 million members, establishing Aeroplan as one of the top 10 airline loyalty programs in the world.',
    ],
    accentVariant: 2,
    role: 'Forward Deployed Senior Engineer',
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
    logoFile: 'shopify.svg',
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
    logoFile: 'ibm.svg',
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
