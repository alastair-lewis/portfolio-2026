import {readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {describe, it, expect} from 'vitest';

import en from '../i18n/locales/en.json';
import fr from '../i18n/locales/fr.json';

function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return flattenKeys(value as Record<string, unknown>, path);
    }
    return [path];
  });
}

function collectTsxFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectTsxFiles(full));
    } else if (
      entry.name.endsWith('.tsx') &&
      !entry.name.endsWith('.test.tsx')
    ) {
      results.push(full);
    }
  }
  return results;
}

function extractTKeys(source: string): string[] {
  const keys: string[] = [];
  const regex = /\bt\(\s*['"]([^'"]+)['"]\s*\)/g;
  let match;
  while ((match = regex.exec(source)) !== null) {
    keys.push(match[1]);
  }
  return keys;
}

const componentsDir = join(__dirname, '..', 'components');
const tsxFiles = collectTsxFiles(componentsDir);
const referencedKeys = new Set<string>();

for (const file of tsxFiles) {
  const source = readFileSync(file, 'utf-8');
  for (const key of extractTKeys(source)) {
    referencedKeys.add(key);
  }
}

const enKeys = new Set(flattenKeys(en));
const frKeys = new Set(flattenKeys(fr));

describe('i18n key completeness', () => {
  it('every t() key in components exists in en.json', () => {
    const missing = [...referencedKeys].filter((k) => !enKeys.has(k));
    expect(missing).toEqual([]);
  });

  it('every t() key in components exists in fr.json', () => {
    const missing = [...referencedKeys].filter((k) => !frKeys.has(k));
    expect(missing).toEqual([]);
  });

  it('en.json and fr.json have identical key sets', () => {
    const onlyEn = [...enKeys].filter((k) => !frKeys.has(k));
    const onlyFr = [...frKeys].filter((k) => !enKeys.has(k));
    expect(onlyEn).toEqual([]);
    expect(onlyFr).toEqual([]);
  });
});
