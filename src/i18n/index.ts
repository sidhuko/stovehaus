import { en } from './en';
import { es } from './es';
import { DEFAULT_LOCALE, LOCALES, type Dict, type Locale } from './types';

export { DEFAULT_LOCALE, LOCALES };
export type { Dict, Locale, SpecKey } from './types';

export const DICTS: Record<Locale, Dict> = { en, es };

export const t = (locale: Locale): Dict => DICTS[locale];

/**
 * Build a path for a locale. English is unprefixed and Spanish sits under
 * /es/, so this is a prefix operation and nothing else — which is exactly why
 * the Spanish routes reuse the English slugs. A language switch can never land
 * on a page that does not exist.
 *
 *   localePath('en', '/sauna')  →  '/sauna/'
 *   localePath('es', '/sauna')  →  '/es/sauna/'
 *   localePath('es', '/')       →  '/es/'
 *
 * The trailing slash is deliberate. Astro builds directory-style routes
 * (`/sauna/index.html`), and a static host asked for `/sauna` answers with a
 * 301 to `/sauna/`. Emitting the slash ourselves means no internal link ever
 * costs a redirect hop.
 */
export const localePath = (locale: Locale, path: string): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withSlash = clean === '/' ? '/' : `${clean.replace(/\/$/, '')}/`;
  if (locale === DEFAULT_LOCALE) return withSlash;
  return withSlash === '/' ? '/es/' : `/es${withSlash}`;
};

/** Strip the locale prefix back off, giving the shared route key. */
export const stripLocale = (pathname: string): string => {
  const withoutPrefix = pathname.replace(/^\/es(?=\/|$)/, '');
  const normalised = withoutPrefix === '' ? '/' : withoutPrefix;
  // Trailing slashes are noise for comparison; keep the root as '/'.
  return normalised.length > 1 ? normalised.replace(/\/$/, '') : normalised;
};

/** Which locale a URL belongs to. */
export const localeFromPath = (pathname: string): Locale =>
  /^\/es(\/|$)/.test(pathname) ? 'es' : 'en';

/** The other locale — there are two, so this is unambiguous. */
export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'es' : 'en');
