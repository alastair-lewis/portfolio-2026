export type TagVariant = 'coral' | 'teal' | 'orange';

export interface PortfolioTag {
  label: string;
  variant: TagVariant;
}

export interface Role {
  title: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  logoFile?: string;
  url?: string;
  roles: Role[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  accentVariant: 1 | 2 | 3;
  stackLabel: string;
  tags: PortfolioTag[];
  url?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  years: string;
  logoFile?: string;
}
