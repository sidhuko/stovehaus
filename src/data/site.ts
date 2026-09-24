/**
 * STOVEHAUS — locale-independent site configuration.
 *
 * Copy lives in src/i18n/{en,es}.ts. What is here is what does not translate:
 * the brand name, the domain, contact details and the tagline.
 *
 * Voice rules this site's copy is written against (guidelines p.8), in BOTH
 * languages:
 *   1. Lead with the concrete thing.
 *   2. Every claim carries a number or a name. If neither, cut the claim.
 *   3. Second person, active voice.
 *   4. Short sentences for facts, longer ones for craft.
 *   5. Dual units on anything crossing the border, metric first.
 *   6. No exclamation marks in customer-facing material.
 *   7. No emoji in owned channels.
 */

export const SITE = {
  /** One word, capital S only, in every language. Never "StoveHaus". */
  name: 'Stovehaus',

  // TODO(domain): the site deploys to stovehaus.com, but both the 0001 flyer
  // and the 0002 event stand print stovehaus.com.mx. Either point .com.mx at
  // the same place with a redirect, or correct the collateral — printed
  // material sending people to a domain that does not serve the site is worse
  // than either.
  domain: 'stovehaus.com',
  url: 'https://stovehaus.com',

  /**
   * Sign-off only, and NEVER translated — the guidelines are explicit:
   * "Never modify it, never translate it in the lockup." It exists on this
   * site only as artwork inside the reversed lockup in the footer, so there is
   * nothing here to translate even by accident. Kept for reference and for the
   * lockup's alt text.
   */
  tagline: 'Built for the flame.',

  /*
    Contact. One number, three forms, all derived from the same ten digits —
    changing the number means changing `phoneDigits` and nothing else.

    The three forms are not interchangeable, and Mexico is where this usually
    goes wrong:

      · DISPLAY    625-111-6622   the local ten-digit form, which is what
                                  somebody copies into a dialler.
      · tel:       +526251116622  E.164. Needs the +52 or it will not dial
                                  from outside Mexico.
      · wa.me      526251116622   E.164 WITHOUT the plus. Twelve digits:
                                  52 + ten. NOT the legacy thirteen-digit
                                  "521" mobile form — WhatsApp dropped that in
                                  2020 and a 521 link silently fails to resolve
                                  to a real account. The audit asserts this.

    Supersedes the earlier placeholders: the 0001 flyer printed 625-111-3000
    and the 0002 event stand printed 625-111-0000. Neither is live. Both pieces
    of collateral now disagree with the site and should be reprinted.
  */
  phoneDigits: '6251116622',
  phone: '625-111-6622',
  phoneHref: '+526251116622',
  /** No leading plus. This is the wa.me path segment. */
  whatsapp: '526251116622',

  // TODO(email): sales@stovehaus.com follows the stovehaus.com domain but has
  // not been confirmed to exist. If it does not, remove it rather than leaving
  // a dead mailto — WhatsApp and the phone number both reach someone.
  email: 'sales@stovehaus.com',
} as const;

/**
 * Build a WhatsApp click-to-chat link, optionally pre-filled.
 *
 * The site is static and has no backend, so WhatsApp is the only contact route
 * that actually delivers a structured message to a person. Text is encoded
 * rather than templated into the URL by hand, because a message containing an
 * ampersand would otherwise truncate everything after it.
 */
/**
 * Agency credit in the footer. The studio name is a proper noun and does not
 * translate; only the "Built by" label moves between languages.
 */
export const BUILT_BY = {
  name: 'OTRO Digital',
  url: 'https://otro.digital',
} as const;

export const whatsappUrl = (text?: string): string =>
  text
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${SITE.whatsapp}`;

/** Route keys, shared by both locales. Labels come from the dictionary. */
export const NAV = [
  { key: 'sauna', href: '/sauna' },
  { key: 'jacuzzi', href: '/jacuzzi' },
  { key: 'firepits', href: '/firepits' },
  { key: 'rooms', href: '/rooms' },
  { key: 'shop', href: '/shop' },
  { key: 'dealers', href: '/dealers' },
  { key: 'specs', href: '/specs' },
] as const;

/**
 * TODO(certification): the guidelines are emphatic that whatever the
 * certification status is, it must be stated exactly — "CSA listing in
 * progress, expected Q2" beats silence, and beats an implication that turns out
 * to be wrong. No status is known, so the placeholder says so plainly in both
 * languages rather than implying a listing exists. Replace before launch.
 */
export const CERTIFICATION_KNOWN = false;
