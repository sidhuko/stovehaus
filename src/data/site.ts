/**
 * STOVEHAUS — site-wide copy and configuration.
 *
 * Voice rules this copy is written against (guidelines p.8):
 *   1. Lead with the concrete thing.
 *   2. Every claim carries a number or a name. If neither, cut the claim.
 *   3. Second person, active voice.
 *   4. Short sentences for facts, longer ones for craft.
 *   5. Dual units on anything crossing the border, metric first.
 *   6. No exclamation marks in customer-facing material.
 *   7. No emoji in owned channels.
 *
 * Because rule 2 is strict and almost no tested figures exist yet, this copy
 * deliberately makes fewer claims than a finished site would. Claims are added
 * when numbers arrive, not before.
 */

export const SITE = {
  name: 'Stovehaus',
  domain: 'stovehaus.com.mx',
  /** Sign-off only. Never a headline, never modified, never translated. */
  tagline: 'Built for the flame.',
  description:
    'Wood-fired sauna and jacuzzi heaters and gas fire pits, hand-welded in Mexico for the North American market.',

  // TODO(contact): the 0001 flyer prints 625-111-3000, the 0002 event stand
  // prints 625-111-0000. Using the flyer's as the more finished customer-facing
  // piece. Needs confirming before this site goes live.
  phone: '625-111-3000',
  phoneHref: '+526251113000',
  email: `sales@stovehaus.com.mx`,
} as const;

export const NAV = [
  { href: '/sauna', label: 'Sauna' },
  { href: '/jacuzzi', label: 'Jacuzzi' },
  { href: '/firepits', label: 'Firepits' },
  { href: '/shop', label: 'The Shop' },
  { href: '/dealers', label: 'Dealers' },
  { href: '/specs', label: 'Specs' },
] as const;

/**
 * The four messages, in the guidelines' own priority order (p.9).
 * Each page should carry at least one, stated in its own words rather than
 * pasted — so these are the source, and pages paraphrase.
 */
export const MESSAGES = [
  {
    n: '01',
    title: 'Built heavy, on purpose.',
    body: 'Thick plate, welded seams, a firebox meant to be fed hard for twenty years — not a stamped shell.',
  },
  {
    n: '02',
    title: 'Made by hand, by people we can name.',
    body: "One shop, one crew, every stove fired before it's crated.",
  },
  {
    n: '03',
    title: 'Priced to be sold, not just admired.',
    body: 'Mexican fabrication and a short freight run north mean a dealer margin that works against European imports.',
  },
  {
    n: '04',
    title: 'Ready for the North American market.',
    body: 'Listings, clearances, flue standards, imperial documentation, parts on this continent.',
  },
] as const;

/**
 * TODO(certification): the guidelines are emphatic that whatever the
 * certification status is, it must be stated exactly — "CSA listing in
 * progress, expected Q2" beats silence, and beats an implication that turns out
 * to be wrong. No status is known, so this placeholder says so plainly rather
 * than implying a listing exists. Replace before launch.
 */
export const CERTIFICATION_STATUS = {
  known: false,
  text: 'Certification status not yet published. Ask us directly and we will tell you exactly where each line stands.',
} as const;
