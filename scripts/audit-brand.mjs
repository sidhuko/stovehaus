/**
 * Brand compliance audit.
 *
 * Checks the rules from Stovehaus-Brand-Guidelines.pdf that are cheap to break
 * and expensive to find by eye. Run against the built site:
 *
 *   npm run build && node scripts/audit-brand.mjs
 *
 * Uses the same relative-luminance maths the Dusk extension was derived with,
 * so the numbers here and the numbers in BRAND.md come from one source.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');

// --- colour maths -----------------------------------------------------------

const srgbToLinear = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex) => {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return (
    0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b)
  );
};

const contrast = (a, b) => {
  const [la, lb] = [luminance(a), luminance(b)];
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
};

// --- palette (kit v1.0 + the Dusk proposal) ---------------------------------

const C = {
  crownGold: '#B2841B',
  goldDeep: '#7D5C0F',
  goldWash: '#F4E8C8',
  firebox: '#1A1713',
  ember: '#B23D16',
  emberWash: '#F7E3D8',
  spring: '#2E5F66',
  springWash: '#DCE9EA',
  dusk: '#7C466A',
  duskWash: '#EFE6EC',
  steel: '#6D675C',
  ink: '#15120E',
  inkMuted: '#57503F',
  inkFaint: '#79705C',
  surface100: '#FAF8F3',
  surface200: '#F2EEE4',
  surface300: '#E7E1D3',
  edge: '#8B8472',
  white: '#FFFFFF',
};

const results = [];
const check = (name, actual, assertion, detail) => {
  results.push({ name, actual, pass: assertion, detail });
};

// --- rule checks ------------------------------------------------------------

// Guidelines p.6: "Type on gold is ink, never white. White on crown gold is
// 3.4:1 and fails; ink on crown gold is 5.5:1 and passes."
check(
  'Ink on crown gold passes AA',
  contrast(C.ink, C.crownGold),
  contrast(C.ink, C.crownGold) >= 4.5,
  'guidelines p.6'
);
check(
  'White on crown gold correctly fails (must never be used)',
  contrast(C.white, C.crownGold),
  contrast(C.white, C.crownGold) < 4.5,
  'guidelines p.6 — this failing is the expected result'
);

// "Gold never sets small text on a light ground ... Use gold-deep at 5.8:1."
check(
  'Crown gold on surface-100 correctly fails at body size',
  contrast(C.crownGold, C.surface100),
  contrast(C.crownGold, C.surface100) < 4.5,
  'guidelines p.6 — gold is display-only on light'
);
check(
  'Gold-deep on surface-100 passes AA',
  contrast(C.goldDeep, C.surface100),
  contrast(C.goldDeep, C.surface100) >= 4.5,
  'the readable gold'
);
check(
  'Gold-deep on gold-wash passes AA',
  contrast(C.goldDeep, C.goldWash),
  contrast(C.goldDeep, C.goldWash) >= 4.5,
  'certification callout panels'
);

// Signal colours on their wash grounds — the line chips.
for (const [line, fg, bg] of [
  ['ember', C.ember, C.emberWash],
  ['spring', C.spring, C.springWash],
  ['dusk', C.dusk, C.duskWash],
]) {
  check(
    `Chip: ${line} on ${line}-wash passes AA`,
    contrast(fg, bg),
    contrast(fg, bg) >= 4.5,
    'line code chip'
  );
}

// Signal colours as the headline figure on the card ground.
for (const [line, fg] of [
  ['ember', C.ember],
  ['spring', C.spring],
  ['dusk', C.dusk],
]) {
  check(
    `Figure: ${line} on surface-100 passes AA`,
    contrast(fg, C.surface100),
    contrast(fg, C.surface100) >= 4.5,
    'headline figure on a card'
  );
}

// The Dusk proposal has to sit in the band the other two signals occupy,
// otherwise it reads as a brand colour rather than a code.
const emberOnSurface = contrast(C.ember, C.surface100);
const springOnSurface = contrast(C.spring, C.surface100);
const duskOnSurface = contrast(C.dusk, C.surface100);
check(
  'Dusk sits in the ember/spring contrast band',
  duskOnSurface,
  duskOnSurface >= Math.min(emberOnSurface, springOnSurface) - 0.3 &&
    duskOnSurface <= Math.max(emberOnSurface, springOnSurface) + 0.3,
  `ember ${emberOnSurface.toFixed(2)} · spring ${springOnSurface.toFixed(2)}`
);

// Body text tokens on every ground they are used on.
for (const [fg, fgName] of [
  [C.ink, 'ink'],
  [C.inkMuted, 'ink-muted'],
]) {
  for (const [bg, bgName] of [
    [C.surface100, 'surface-100'],
    [C.surface200, 'surface-200'],
    [C.surface300, 'surface-300'],
  ]) {
    check(
      `Text: ${fgName} on ${bgName} passes AA`,
      contrast(fg, bg),
      contrast(fg, bg) >= 4.5,
      'body copy'
    );
  }
}

// ink-faint is tertiary — captions and footnotes. It does NOT clear AA on
// surface-300, so the audit records where it may be used.
check(
  'ink-faint on surface-100 passes AA',
  contrast(C.inkFaint, C.surface100),
  contrast(C.inkFaint, C.surface100) >= 4.5,
  'tertiary text'
);
check(
  'ink-faint on surface-300 correctly fails (do not use)',
  contrast(C.inkFaint, C.surface300),
  contrast(C.inkFaint, C.surface300) < 4.5,
  'use ink-muted on sunken grounds instead'
);

// Steel is used for secondary labels on cards.
check(
  'Steel on surface-100 passes AA',
  contrast(C.steel, C.surface100),
  contrast(C.steel, C.surface100) >= 4.5,
  'model code and lead time'
);
check(
  'Steel on surface-200 passes AA',
  contrast(C.steel, C.surface200),
  contrast(C.steel, C.surface200) >= 4.5,
  'secondary labels on raised ground'
);

// Edge is the control border / focus ring, which needs 3:1 not 4.5:1.
check(
  'Edge on surface-100 clears 3:1 for borders',
  contrast(C.edge, C.surface100),
  contrast(C.edge, C.surface100) >= 3,
  'focus rings and control borders'
);

// Reversed ground.
check(
  'Surface-100 on firebox passes AA',
  contrast(C.surface100, C.firebox),
  contrast(C.surface100, C.firebox) >= 4.5,
  'hero and footer copy'
);
check(
  'Crown gold on firebox passes AA',
  contrast(C.crownGold, C.firebox),
  contrast(C.crownGold, C.firebox) >= 4.5,
  'gold is legible on a dark ground, unlike on a light one'
);

// Hero text over a photograph. The 72% firebox scrim (p.10) guarantees only
// that the ground is no lighter than a white pixel laid under it, so that is
// the ground every hero token has to clear.
const scrimmed = (() => {
  const fb = [0x1a, 0x17, 0x13];
  const mix = fb.map((c) => Math.round(0.28 * 255 + 0.72 * c));
  return '#' + mix.map((c) => c.toString(16).padStart(2, '0')).join('');
})();

check(
  'Hero: surface-100 over a scrimmed photo passes AA',
  contrast(C.surface100, scrimmed),
  contrast(C.surface100, scrimmed) >= 4.5,
  `worst-case ground ${scrimmed}`
);
check(
  'Hero: crown gold over a scrimmed photo correctly fails',
  contrast(C.crownGold, scrimmed),
  contrast(C.crownGold, scrimmed) < 4.5,
  'gold is for a FLAT firebox band only — Hero.astro switches on this'
);

// --- markup checks ----------------------------------------------------------

let markupIssues = [];

/*
  Cascade layers. Tailwind emits its utilities into the `utilities` layer, and
  an UNLAYERED rule beats every layered rule regardless of specificity. So a
  bare `.btn-gold { display: inline-block }` silently defeats `hidden` and
  `sm:inline-block` on the same element — which is how the mobile header ended
  up rendering the quote button twice. Component classes stay in @layer
  components or responsive utilities stop working.
*/
{
  const raw = readFileSync(join(ROOT, 'src/styles/global.css'), 'utf8');
  // Strip comments first — this very file explains the rule by quoting
  // `.btn-gold { ... }`, and matching that prose would make the check vacuous.
  const css = raw.replace(/\/\*[\s\S]*?\*\//g, '');
  const layered = css.slice(css.indexOf('@layer components'));
  const stray = ['.btn-gold', '.btn-outline', '.label', '.unit', '.spec', '.display-1']
    .filter((cls) => !layered.includes(`${cls} {`));
  if (!css.includes('@layer components')) {
    markupIssues.push('global.css — component classes are not in @layer components');
  } else if (stray.length) {
    markupIssues.push(
      `global.css — outside @layer components: ${stray.join(', ')} (breaks Tailwind utilities)`
    );
  }
}

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith('.html')) htmlFiles.push(full);
  }
};

try {
  walk(DIST);
} catch {
  console.error('No dist/ found. Run `npm run build` first.\n');
  process.exit(2);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/index\.html$/, '');
  const body = html.slice(html.indexOf('<body'));
  const text = body.replace(/<[^>]+>/g, ' ');

  // Voice rule 6: no exclamation marks in customer-facing material.
  if (/!/.test(text)) {
    markupIssues.push(`${page} — contains an exclamation mark (voice rule 6)`);
  }

  // Voice rule 7: no emoji in owned channels. Emoji_Presentation rather than
  // Extended_Pictographic, because the latter also matches © ® ™, which are
  // typographic marks and perfectly welcome. A pictographic character followed
  // by VS-16 is an emoji too, so that is caught separately.
  if (/\p{Emoji_Presentation}/u.test(text) || /\p{Extended_Pictographic}️/u.test(text)) {
    markupIssues.push(`${page} — contains an emoji (voice rule 7)`);
  }

  // The brand is written Stovehaus — one word, capital S only (p.9).
  for (const wrong of ['StoveHaus', 'Stove Haus', 'stovehaus.com'].slice(0, 2)) {
    if (text.includes(wrong)) {
      markupIssues.push(`${page} — brand written as "${wrong}" (p.9: Stovehaus)`);
    }
  }

  // Words the guidelines tell us not to use (p.8).
  for (const word of [
    'artisanal',
    'bespoke',
    'crafted',
    'partner ecosystem',
    'availability window',
    'low-cost region',
    'offshore',
  ]) {
    if (new RegExp(`\\b${word}\\b`, 'i').test(text)) {
      markupIssues.push(`${page} — uses avoided word "${word}" (p.8)`);
    }
  }

  // The tagline signs off in the footer only — never in the hero (p.10).
  const heroEnd = body.indexOf('</section>');
  if (heroEnd > -1 && body.slice(0, heroEnd).includes('Built for the flame')) {
    markupIssues.push(`${page} — tagline appears in the hero (p.10: footer only)`);
  }

  // Rounded corners and shadows: "square-cornered layouts, ruled rather than
  // shadowed" (p.2). Catches Tailwind utilities that would reintroduce them.
  for (const cls of ['rounded-', 'shadow-', 'drop-shadow']) {
    if (new RegExp(`class="[^"]*\\b${cls}`).test(body)) {
      markupIssues.push(`${page} — uses "${cls}" (p.2: square-cornered, ruled not shadowed)`);
    }
  }

  // Unit symbols are case-significant: kW is not KW, kg is not KG, m² is not
  // M². A CSS text-transform on a label is the usual way these get corrupted,
  // and "say the number" is worthless if the unit beside it is wrong.
  for (const bad of ['KW', 'KG', 'M²', 'M³', 'BTU/H', 'MM', 'FT²', 'LB']) {
    const re = new RegExp(`(^|[\\s>(])${bad.replace('²', '²')}([\\s<).,·]|$)`);
    if (re.test(text)) {
      markupIssues.push(`${page} — unit rendered as "${bad}" (case-significant)`);
    }
  }

  // Every image needs an alt attribute.
  const imgs = body.match(/<img\b[^>]*>/g) ?? [];
  for (const img of imgs) {
    if (!/\salt=/.test(img)) {
      markupIssues.push(`${page} — an <img> has no alt attribute`);
    }
  }

  // Fonts must be self-hosted — no call out to Google.
  if (/fonts\.(googleapis|gstatic)\.com/.test(html)) {
    markupIssues.push(`${page} — loads fonts from Google (kit ships woff2 locally)`);
  }

  // Minimum sizes, guidelines p.4. The full lockup carries the tagline, which
  // closes up and stops reading below 200px — drop the tagline rather than
  // shrink it. The mark alone survives down to 24px.
  const MIN_WIDTH = [
    [/stovehaus-(primary|reversed|black|white)\.svg/, 200, 'full lockup with tagline'],
    [/stovehaus-mark-(gold|black|white)\.svg/, 24, 'mark alone'],
  ];
  for (const img of imgs) {
    const src = img.match(/src="([^"]+)"/)?.[1] ?? '';
    const width = Number(img.match(/\swidth="(\d+)"/)?.[1] ?? NaN);
    for (const [pattern, min, what] of MIN_WIDTH) {
      if (pattern.test(src) && Number.isFinite(width) && width < min) {
        markupIssues.push(
          `${page} — ${what} rendered at ${width}px, minimum is ${min}px (p.4)`
        );
      }
    }
  }
}

// --- report -----------------------------------------------------------------

const failed = results.filter((r) => !r.pass);
const pad = (s, n) => s.padEnd(n);

console.log('\nSTOVEHAUS — brand audit\n' + '='.repeat(72) + '\n');
console.log('COLOUR\n');
for (const r of results) {
  console.log(
    `  ${r.pass ? 'PASS' : 'FAIL'}  ${pad(r.name, 52)} ${r.actual.toFixed(2)}:1`
  );
}

console.log(`\nMARKUP  (${htmlFiles.length} pages)\n`);
if (markupIssues.length === 0) {
  console.log('  PASS  No voice, typography or layout violations found.');
} else {
  for (const issue of markupIssues) console.log(`  FAIL  ${issue}`);
}

console.log('\n' + '='.repeat(72));
const total = failed.length + markupIssues.length;
console.log(
  total === 0
    ? `All ${results.length} colour checks and ${htmlFiles.length} pages pass.\n`
    : `${total} issue(s) found.\n`
);

process.exit(total === 0 ? 0 : 1);
