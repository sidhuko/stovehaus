/**
 * Photography, imported so Astro can optimise and size it.
 *
 * All of it is Unsplash stock — see CREDITS.md for the photo IDs. Two rules
 * govern what is allowed in here, and they matter more than they look:
 *
 *   1. ATMOSPHERE ONLY. Steam, cedar, fire, woodland, a welding bench. Stock
 *      photography of someone else's heater presented as a Versa would be
 *      misrepresentation, and a dealer would spot it. Where a plate shows a
 *      product, the crop holds on material and process, never on an
 *      identifiable competitor's unit.
 *   2. NO STOCK ON A SPEC PAGE AS IF IT WERE THE PRODUCT. A photograph next to
 *      a figure reads as that thing. Until Stovehaus has its own product
 *      photography, a page with no honest image gets a flat firebox band
 *      rather than a borrowed one.
 */
import saunaLoyly from '../assets/sauna-loyly.jpg';
import jacuzziWoodFired from '../assets/jacuzzi-wood-fired.jpg';
import firepitLinearBurner from '../assets/firepit-linear-burner.jpg';
import shopPressBrake from '../assets/shop-press-brake.jpg';
import shopGrindingSparks from '../assets/shop-grinding-sparks.jpg';
import shopPlate from '../assets/shop-plate.jpg';
import type { ImageMetadata } from 'astro';

export const IMAGES: Record<string, ImageMetadata> = {
  'sauna-loyly.jpg': saunaLoyly,
  'jacuzzi-wood-fired.jpg': jacuzziWoodFired,
  'firepit-linear-burner.jpg': firepitLinearBurner,
  'shop-press-brake.jpg': shopPressBrake,
  'shop-grinding-sparks.jpg': shopGrindingSparks,
  'shop-plate.jpg': shopPlate,
};

export const getImage = (key?: string): ImageMetadata | undefined =>
  key ? IMAGES[key] : undefined;
