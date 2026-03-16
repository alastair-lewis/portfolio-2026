type ClassValue = string | undefined | null | false;

export function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
