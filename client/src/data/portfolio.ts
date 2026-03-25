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
    title: '',
    logoFile: 'shopify_square.svg',
    description: [''],
    accentVariant: 3,
    role: '',
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
        period: '2024 -- Present',
        location: 'Toronto, ON',
        bullets: [
          'Work on the Inventory team within Shopify\'s core platform, building foundational infrastructure that powers merchants across the globe.',
          'Champion the technical direction of high-impact projects that expand Shopify\'s platform offering, driving GMV growth and merchant acquisition by solving real merchant business needs.',
          'Mentor junior developers and help establish best practices and patterns across the team.',
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
          'One of the fastest-growing consultants in the firm, progressing from Associate to Managing Consultant within 4 years.',
          'Drove technical project delivery across a diverse portfolio of clients spanning major Canadian airlines, multiple major Canadian banks, and non-profits.',
          'Led high-profile, high-visibility engagements under significant executive scrutiny, consistently delivering on IBM\'s most complex mandates.',
          'Helped diversify and grow IBM\'s book of business across key accounts, expanding engagements into new workstreams and disciplines.',
          'Mentored incoming developers across the consulting practice, establishing technical standards and onboarding best practices.',
        ],
      },
      {
        title: 'Extreme Blue Technical Intern',
        period: '2019',
        location: 'Markham, ON',
        bullets: [
          'Developed a moonshot machine learning product over 4 months, leveraging neural networks to classify dangerous incoming server connections for IBM\'s Guardium security platform.',
          'Helped build the business case for the product and pitched it to a suite of IBM executives in New York City, receiving high praise.',
          'A version of the project is now offered as part of IBM\'s security product portfolio.',
        ],
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Queen's University",
    degree: 'B.Sc. (Hons.) Computing -- Software Design',
    years: '2016 -- 2020',
  },
  {
    institution: 'Crescent School',
    degree: 'Ontario Secondary School Diploma',
    years: '2008 -- 2016',
  },
];
