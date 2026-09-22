/**
 * Photography, imported so Astro can optimise and size it.
 *
 * The library is thin. There is no shop photography and no fire pit image at
 * source resolution — the 0001 flyer's fire pit table shot has no locatable
 * original. Pages with no image fall back to a plain firebox band rather than
 * borrowing an image from another line, which would misrepresent the product.
 * See BRAND.md open items.
 */
import saunaLoyly from '../assets/sauna-loyly.jpg';
import jacuzziWoodFired from '../assets/jacuzzi-wood-fired.jpg';
import type { ImageMetadata } from 'astro';

export const IMAGES: Record<string, ImageMetadata> = {
  'sauna-loyly.jpg': saunaLoyly,
  'jacuzzi-wood-fired.jpg': jacuzziWoodFired,
};

export const getImage = (key?: string): ImageMetadata | undefined =>
  key ? IMAGES[key] : undefined;
