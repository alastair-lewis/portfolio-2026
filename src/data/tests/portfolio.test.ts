import {describe, it, expect} from 'vitest';

import {projects, experience, education} from '../portfolio';

describe('portfolio data', () => {
  describe('projects', () => {
    it('has at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('every project has a unique id', () => {
      const ids = projects.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('every project has a valid accentVariant (1, 2, or 3)', () => {
      for (const project of projects) {
        expect([1, 2, 3]).toContain(project.accentVariant);
      }
    });

    it('every project has at least one tag', () => {
      for (const project of projects) {
        expect(project.tags.length).toBeGreaterThan(0);
      }
    });

    it('every tag variant is coral, teal, or orange', () => {
      for (const project of projects) {
        for (const tag of project.tags) {
          expect(['coral', 'teal', 'orange']).toContain(tag.variant);
        }
      }
    });
  });

  describe('experience', () => {
    it('has at least one entry', () => {
      expect(experience.length).toBeGreaterThan(0);
    });

    it('every entry has at least one role', () => {
      for (const entry of experience) {
        expect(entry.roles.length).toBeGreaterThan(0);
      }
    });

    it('every role has at least one bullet', () => {
      for (const entry of experience) {
        for (const role of entry.roles) {
          expect(role.bullets.length).toBeGreaterThan(0);
        }
      }
    });

    it('includes Shopify', () => {
      expect(experience.some((e) => e.company === 'Shopify')).toBe(true);
    });

    it('includes IBM', () => {
      expect(experience.some((e) => e.company === 'IBM')).toBe(true);
    });
  });

  describe('education', () => {
    it('has at least one entry', () => {
      expect(education.length).toBeGreaterThan(0);
    });

    it('every entry has a years field', () => {
      for (const entry of education) {
        expect(entry.years).toMatch(/\d{4}/);
      }
    });

    it("includes Queen's University", () => {
      expect(education.some((e) => e.institution === "Queen's University")).toBe(true);
    });
  });
});
