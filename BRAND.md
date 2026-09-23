# Stovehaus — brand contract for this site

The authority is `../brand-kit/`: the nine logo files, the three typefaces, the
palette CSV, and `04-Guidelines/Stovehaus-Brand-Guidelines.pdf` (13 pages). This
file records only what a developer needs in front of them, plus the two places
this site had to go beyond kit v1.0 and why.

Run `npm run audit` before shipping. It checks every colour pair below and reads
the built HTML for voice and layout violations.

---

## The two decisions that are not in kit v1.0

### 1. Dusk — a third signal colour, for the gas fire pit line

Kit v1.0 codes exactly two product lines: **Ember** `#B23D16` for the sauna line
(fire) and **Spring** `#2E5F66` for the jacuzzi line (water). Stovehaus also
sells gas fire pits — the 0001 event flyer already reads
`SAUNA · JACUZZI · FIREPITS` — so the site needs a third code.

| Token | HEX | Role |
|---|---|---|
| `dusk` | `#7C466A` | Gas. Burner output, burner length, fuel type — the fire pit line |
| `dusk-wash` | `#EFE6EC` | Tint ground behind a gas figure |

Derived rather than picked, against three constraints:

- **Hue clear of everything already spoken for.** Ember sits at 15°, Spring at
  188°, Crown Gold at 43°. Dusk is at 320° — 55° from Ember, 132° from Spring.
  Copper and olive were both rejected for colliding with Ember and Gold.
- **Contrast inside the band the other two occupy**, so it reads as a code and
  not as a second brand colour.
- **Saturation below both.** Dusk is at 28, under Spring's 38 and far under
  Ember's 78, which keeps the page reading as cedar and steel rather than
  office software (p.2).

Measured parity:

| | on surface-100 | white on it | ink on wash | colour on wash |
|---|---|---|---|---|
| Ember | 5.54:1 | 5.88:1 | 15.06:1 | 4.74:1 |
| Spring | 6.72:1 | 7.13:1 | 15.01:1 | 5.73:1 |
| **Dusk** | **6.73:1** | **7.14:1** | **15.29:1** | **5.85:1** |

**Status: proposed, screen only.** No CMYK has been derived. The guidelines warn
the gold goes muddy on coated stock, so Dusk needs a printed proof before it
earns a place in `03-Colour/stovehaus-palette.ase`. Until then it does not go on
a spec sheet, a crate or a plate.

### 2. Gold is not usable for text over a photograph

Guidelines p.6 sanctions Crown Gold for display type at 24px+, and p.10 asks for
firebox at 72% opacity over a hero photograph. Those two rules do not compose.

The 72% scrim guarantees only that the darkest ground is `#1A1713` and the
*lightest* is a blown-out white pixel under the scrim — `#5A5855`. Against that
worst case:

- surface-100 → **6.68:1**, passes
- crown gold → **2.10:1**, fails badly

Raising the scrim does not rescue it: gold reaches only 3.73:1 even at 88%.

So `Hero.astro` switches on it. The eyebrow is **gold on a flat firebox band**
(5.28:1, passes) and **surface-100 over a photograph**. This is a resolution of
a gap in v1.0, not a departure from it.

---

## Palette

Kit v1.0, transcribed from `03-Colour/stovehaus-palette.csv` into
`src/styles/global.css`. Never hand-edit a value here; change the CSV and
re-transcribe.

| Token | HEX | Use |
|---|---|---|
| `crown-gold` | `#B2841B` | Large fields, rules, display type 24px+. Never body text on light. |
| `gold-deep` | `#7D5C0F` | The readable gold. Links, small headings, gold text under 24px. |
| `gold-wash` | `#F4E8C8` | Callout panels, certification strip. |
| `firebox` | `#1A1713` | Reversed ground. Hero bands, footer. |
| `ember` / `ember-wash` | `#B23D16` / `#F7E3D8` | Sauna line code. |
| `spring` / `spring-wash` | `#2E5F66` / `#DCE9EA` | Jacuzzi line code. |
| `dusk` / `dusk-wash` | `#7C466A` / `#EFE6EC` | Fire pit line code — **proposed**. |
| `steel` | `#6D675C` | Mill finish. Secondary labels, dimension lines. |
| `ink` / `ink-muted` / `ink-faint` | `#15120E` / `#57503F` / `#79705C` | Text, three levels. |
| `surface-100/200/300` | `#FAF8F3` / `#F2EEE4` / `#E7E1D3` | Page, raised, sunken. |
| `hairline` / `edge` | `#D6CFBF` / `#8B8472` | Default rule / control borders. |

### Colour rules that are easy to break

1. **Type on gold is ink, never white.** White is 3.38:1 and fails; ink is
   5.52:1. The PDF calls this the single most common way the palette gets broken.
2. **Gold never sets small text on a light ground** — 3.19:1. Use `gold-deep`
   (5.80:1).
3. **Ember, Spring and Dusk are a coding system, not accents.** They appear on
   the line chip and on the headline figure, nowhere else. Spend one on a button
   or a highlight and the code stops working.
4. **`ink-faint` does not clear AA on `surface-300`** (3.76:1). Use `ink-muted`
   on sunken grounds.

---

## Type

Three faces, three jobs, a hard line between them (p.7). All self-hosted as
woff2 from `02-Fonts/` — nothing is fetched from Google.

| Face | Job | Never |
|---|---|---|
| **Afacad** | Headlines, uppercase labels, nav, buttons, captions | Running text |
| **Spectral** | Every paragraph — site, proposals, manuals, terms | A headline |
| **IBM Plex Mono** | Specifications only. Tabular figures on | Anything else |

Scale, from p.7: `display-1` 64/60 -0.01em · `display-3` 30/36 · `lede` Spectral
300 20/32 · `body-copy` Spectral 400 17/28 held near 65ch · `eyebrow` 13/16
0.14em · `spec` Plex Mono 400 14/22 tabular.

**Unit symbols never get uppercased.** `kW` is not `KW`, `kg` is not `KG`, `m²`
is not `M²`. Use the `.unit` class, not `.label` — `.label` carries
`text-transform: uppercase` and will corrupt them. The audit greps for this.

---

## Logo

Use the files in `public/brand/`. **Never re-typeset the wordmark**, even though
Afacad ships in the kit — the spacing, tagline tracking and crown position are
fixed in the master (README rule 5).

- **Header:** mark at 32px beside the wordmark artwork. Never the stacked
  lockup, which dies at header height (p.10).
- **Footer:** the reversed lockup at 224px wide. Minimum for the full lockup
  *with* the tagline is 200px — below that the tagline closes up and stops
  reading. Drop the tagline rather than shrink it.
- **Clear space** is X on all four sides, X = the cap height of the wordmark.
- **The tagline signs off once, in the footer.** It is already inside the
  reversed lockup artwork, so it is not also set as live type.

The kit's reversed/white SVGs were checked for a baked-in background rect. They
have none — the artwork is clean and drops onto any ground.

---

## Voice

Plainspoken, specific, unhurried — a shop foreman who knows what he built and
does not need to oversell it.

1. Lead with the concrete thing.
2. **Every claim carries a number or a name. If neither, cut the claim.**
3. Second person, active voice.
4. Short sentences for facts, longer ones for craft.
5. Dual units, metric first: `12 m³ (424 ft³)`.
6. No exclamation marks. 7. No emoji.

Use *heater, stove, firebox, hand-welded, cut from plate, shop, floor, bench,
made in Mexico, dealer, installer, lead time, in stock*.
Avoid *unit, solution, crafted, artisanal, bespoke, facility, campus, offshore,
low-cost region, partner ecosystem, channel, availability window*.

Write the brand as **Stovehaus** in running text — one word, capital S only.
`STOVEHAUS` belongs to the lockup and to uppercase labels, nowhere else.

Rule 2 is the constraint that shapes this whole site. We hold almost no tested
figures, so the copy makes fewer claims than a finished site would. That is
deliberate — claims get added when numbers arrive.

---

## Layout

Heavy, not loud. Square corners everywhere, ruled rather than shadowed,
generously spaced. No gradients, no textures, no drop shadows — if a page looks
expensive because of an effect, the effect is wrong (p.2). The audit fails the
build on any `rounded-*` or `shadow-*` utility.

**Cascade layers matter here.** Component classes live in `@layer components` in
`global.css`. An unlayered rule beats every layered rule regardless of
specificity, so a bare `.btn-gold { display: inline-block }` silently defeats
`hidden` and `sm:inline-block` on the same element. That is a real bug this site
already hit once — the mobile header rendered the quote button twice. The audit
guards it.

---

## Where the Versa figures come from

The Versa line is built to the sizing ladder of the **Stoveman series**
(Stoveman OÜ, Estonia) — 13 / 16 / 20, each also offered with an extended
firebox. Stovehaus fabricates its own stoves to that ladder.

So every kW rating, room volume and stone capacity on this site is a **design
target, not a Stovehaus measurement**, and carries `basis: 'target'` in
`src/data/products.ts`. The site says so on every card and every product page
via `ProvisionalNote.astro`. A figure becomes `'tested'` when someone has fired
the stove and written the number down.

Three consequences, all load-bearing:

1. **Stoveman's CE / EN 15821:2010 certification does not transfer.** It belongs
   to Stoveman's tested appliance from Stoveman's factory. Nothing on this site
   cites it, and the certification panel says plainly that nothing is published
   yet.
2. **Clearances to combustibles are deliberately absent.** The source manual
   gives them (190 mm sides, 250 mm back, 900 mm front, 1140 mm stones to
   ceiling) but they are specific to a tested appliance, an installer quotes a
   job off them, and getting them wrong on a wood-burning stove is a fire risk.
   They go up when Stovehaus has tested its own.
3. **The "made by hand, by people we can name" story is about fabrication, not
   design.** Do not let copy imply the ratings were arrived at independently.

The 0002 event stand had already published Versa 13 as 15.4 kW / 6–13 / 110 kg,
which is the Stoveman 13's rating exactly.

---

## Open items

Tracked as `TODO` in `src/data/products.ts` and `src/data/site.ts`. None are
blocking, all need an answer before launch.

| Item | Current state |
|---|---|
| **Phone number** | The 0001 flyer prints `625-111-3000`, the 0002 event stand prints `625-111-0000`. Using the flyer's. Needs confirming. |
| **Tested figures** | Every Versa figure is a design target. Fire each stove, measure it, and flip `basis` to `'tested'` per model. |
| **Clearances** | Not published, by choice — see above. The single most important thing to test and publish, because an installer cannot quote without them. |
| **Model codes** | The guidelines propose `SH-[line]-[output]-[finish]` and warn that mixed naming makes a small line look improvised. The Versa names are a third convention, and "13" reads as room volume rather than output. No codes assigned; every slot shows `Pending`. |
| **Certification** | Unknown, and Stoveman's does not carry over. The guidelines are emphatic that a status and a date beat silence and beat an implication that turns out wrong. |
| **LS dimensions** | Only the Versa 13 LS weight is known (63 kg). The 16 LS and 20 LS carry no dimensions or weight, and the through-wall opening size is not published for any of them. |
| **Photography** | Two usable plates. No shop photography, and no fire pit image at source resolution — the flyer's fire pit table shot has no locatable original. The firepits page runs a flat firebox hero until one exists. |

### Resolved

- **`m²` vs `m³`** — settled. The event stand's `6–13 m²` was a typo. The
  Stoveman 13 manual gives "Sauna room cubage 6–13 m³". Sauna heaters are rated
  on room **volume**, not floor area, and the site now says so on `/specs`.
- **Firebox plate** — 5 mm, not the 6 mm used as a placeholder in the
  guidelines PDF.
