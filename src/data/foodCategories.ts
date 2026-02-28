import { burgerImages, friesImages, popsImages, rollImages, friedChickenImages, sandwichImages, shakeImages, hotDrinkImages, mojitosImages, dessertImages } from './imageMap';

export interface FoodCategory {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

export const foodCategories: FoodCategory[] = [
  { id: "chicken-burgers", name: "Chicken Burgers", image: burgerImages["dash-classic-chicken"], itemCount: 5 },
  { id: "beef-burgers", name: "Beef Burgers", image: burgerImages["og-smash-beef"], itemCount: 4 },
  { id: "fish-burgers", name: "Fish Burgers", image: burgerImages["ocean-catch-dash"], itemCount: 2 },
  { id: "quick-bites", name: "Quick Bites", image: friesImages["loaded-dash-fries"], itemCount: 5 },
  { id: "pops-boxes", name: "Pops & Boxes", image: popsImages["crispy-chicken-pops"], itemCount: 4 },
  { id: "rolls", name: "Rolls", image: rollImages["turkish-flame-roll"], itemCount: 4 },
  { id: "fryin-flyin", name: "Fryin' & Flyin'", image: friedChickenImages["original-crispy-chicken"], itemCount: 6 },
  { id: "sandwiches", name: "Sandwich Stacks", image: sandwichImages["fresh-garden-veg"], itemCount: 5 },
  { id: "premium-shakes", name: "Premium Shakes", image: shakeImages["nutella-power-dash"], itemCount: 5 },
  { id: "hot-specials", name: "Hot Specials", image: hotDrinkImages["hot-milo-comfort"], itemCount: 3 },
  { id: "mojito-bar", name: "Mojito Bar", image: mojitosImages["blue-lightning-mojito"], itemCount: 5 },
  { id: "desserts", name: "Dessert Zone", image: dessertImages["brownie-bliss-bowl"], itemCount: 3 },
];
