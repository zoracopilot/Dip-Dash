import { comboImages } from './imageMap';

export interface Combo {
  id: string;
  name: string;
  description: string;
  items: string[];
  image: string;
  badge: string;
}

export const allCombos: Combo[] = [
  { id: "catch-crunch-combo", name: "Catch & Crunch Combo", description: "Fish & crispy combination", items: ["Fish", "Fries"], image: comboImages["catch-crunch-combo"], badge: "Popular" },
  { id: "ultimate-party-box", name: "Ultimate Dash Party Box", description: "Assorted items perfect for sharing", items: ["Mixed Items"], image: comboImages["ultimate-party-box"], badge: "Featured" },
  { id: "ocean-chips-basket", name: "Ocean & Chips Basket", description: "Fish & chips combination basket", items: ["Fish", "Chips"], image: comboImages["ocean-chips-basket"], badge: "Popular" },
  { id: "golden-prawn-explosion", name: "Golden Prawn Explosion", description: "Generous portions of crispy prawns", items: ["Prawns", "Fries"], image: comboImages["golden-prawn-explosion"], badge: "Featured" },
];

export const homeCombos = allCombos.slice(0, 6);
