/**
 * Image mapping for food items and combos
 * Combos images are stored in: /images/combos/
 * Individual food images are stored in: /images/
 */

// Combo Images Mapping
export const comboImages = {
  "catch-crunch-combo": "/images/combos/catch-and-crunch-combo.jpg",
  "ultimate-party-box": "/images/combos/ultimate-dash-party-box.jpg",
  "ocean-chips-basket": "/images/combos/ocean-and-chips-basket.jpg",
  "golden-prawn-explosion": "/images/combos/golden-prawn-explosion.jpg",
} as const;

// Individual Food Images - Burgers
export const burgerImages = {
  "dash-classic-chicken": "/images/dash-classic-chicken-supreme.jpg",
  "smash-dash-chicken": "/images/smash-dash-chicken.jpg",
  "nashville-fire-dash": "/images/nashville-fire-dash-chicken.jpg",
  "korean-kick-dash": "/images/korean-kick-dash-chicken.jpg",
  "royal-chicken-tower": "/images/royal-chicken-tower.jpg",
  "og-smash-beef": "/images/og-smash-beef-beast.jpg",
  "flame-grill-beef-dash": "/images/flame-grill-beef-dash.jpg",
  "prime-beef-royale": "/images/prime-beef-royale.jpg",
  "beef-blast-overload": "/images/beef-blast-overload.jpg",
  "ocean-catch-dash": "/images/ocean-catch-dash.jpg",
  "royal-fish-stack": "/images/royal-fish-stack.jpg",
} as const;

// Individual Food Images - Quick Bites & Fries
export const friesImages = {
  "loaded-dash-fries": "/images/signature-loaded-dash-fries.jpg",
  "cheesy-melt-fries": "/images/cheesy-melt-dash-fries.jpg",
  "korean-heat-fries": "/images/korean-heat-fries.jpg",
  "nashville-inferno-fries": "/images/nashville-inferno-fries.jpg",
  "catch-crunch-combo": "/images/combos/catch-and-crunch-combo.jpg",
} as const;

// Individual Food Images - Pops & Boxes
export const popsImages = {
  "crispy-chicken-pops": "/images/crispy-chicken-dash-pops.jpg",
  "fire-blast-pops": "/images/fire-blast-chicken-pops.jpg",
  "seoul-spice-pops": "/images/seoul-spice-pops.jpg",
  "ultimate-party-box": "/images/combos/ultimate-dash-party-box.jpg",
} as const;

// Individual Food Images - Rolls
export const rollImages = {
  "turkish-flame-roll": "/images/turkish-flame-roll.jpg",
  "mediterranean-crunch": "/images/mediterranean-crunch-roll.jpg",
  "smash-chicken-roll": "/images/smash-chicken-roll.jpg",
  "fire-grill-roll": "/images/fire-grill-roll.jpg",
} as const;

// Individual Food Images - Fried Chicken & Seafood
export const friedChickenImages = {
  "original-crispy-chicken": "/images/original-crispy-dash-chicken.jpg",
  "nashville-hot-fried": "/images/nashville-hot-fried-chicken.jpg",
  "golden-fish-fry": "/images/golden-fish-fry-dash.jpg",
  "crispy-shrimp-crunch": "/images/crispy-shrimp-crunch.jpg",
  "ocean-chips-basket": "/images/combos/ocean-and-chips-basket.jpg",
  "golden-prawn-explosion": "/images/combos/golden-prawn-explosion.jpg",
} as const;

// Individual Food Images - Sandwiches
export const sandwichImages = {
  "fresh-garden-veg": "/images/fresh-garden-veg-stack.jpg",
  "veg-club-melt": "/images/veg-club-melt.jpg",
  "cheesy-corn-blast": "/images/cheesy-corn-blast.jpg",
  "desi-tikki-deluxe": "/images/desi-tikki-deluxe.jpg",
  "beef-supreme-stack": "/images/beef-supreme-stack.jpg",
} as const;

// Individual Food Images - Premium Shakes
export const shakeImages = {
  "nutella-power-dash": "/images/nutella-power-dash.jpg",
  "double-choco-blast": "/images/double-choco-blast.jpg",
  "coconut-cream-royale": "/images/coconut-cream-royale.jpg",
  "classic-coffee-kick": "/images/classic-coffee-kick.jpg",
  "milo-madness": "/images/milo-madness.jpg",
} as const;

// Individual Food Images - Hot Specials
export const hotDrinkImages = {
  "hot-milo-comfort": "/images/hot-milo-comfort.jpg",
  "choco-heat": "/images/choco-heat.jpg",
  "mocha-dash": "/images/mocha-dash.jpg",
} as const;

// Individual Food Images - Mojito Bar
export const mojitosImages = {
  "blue-lightning-mojito": "/images/blue-lightning-mojito.jpg",
  "pink-paradise-mojito": "/images/pink-paradise-mojito.jpg",
  "berry-blast-mojito": "/images/berry-blast-mojito.jpg",
  "melon-chill-mojito": "/images/melon-chill-mojito.jpg",
  "raspberry-rush-mojito": "/images/raspberry-rush-mojito.jpg",
  "creamy-milk-punch": "/images/creamy-milk-punch.jpg",
} as const;

// Individual Food Images - Desserts
export const dessertImages = {
  "creamy-milk-punch": "/images/creamy-milk-punch.jpg",
  "brownie-bliss-bowl": "/images/brownie-bliss-bowl.jpg",
  "dubai-royal-delight": "/images/dubai-royal-delight.jpg",
} as const;

// Master image map - combine all categories
export const imageMapByCategory = {
  combos: comboImages,
  "chicken-burgers": burgerImages,
  "beef-burgers": burgerImages,
  "fish-burgers": burgerImages,
  "quick-bites": friesImages,
  "pops-boxes": popsImages,
  rolls: rollImages,
  "fryin-flyin": friedChickenImages,
  sandwiches: sandwichImages,
  "premium-shakes": shakeImages,
  "hot-specials": hotDrinkImages,
  "mojito-bar": mojitosImages,
  desserts: dessertImages,
} as const;

// Helper function to get image by item ID
export function getImagePath(itemId: string, category?: string): string {
  // Check in combos first
  if (itemId in comboImages) {
    return comboImages[itemId as keyof typeof comboImages];
  }

  // If category is provided, check in that category
  if (category && category in imageMapByCategory) {
    const categoryMap = imageMapByCategory[category as keyof typeof imageMapByCategory];
    if (itemId in categoryMap) {
      return categoryMap[itemId as keyof typeof categoryMap];
    }
  }

  // Fallback: search through all categories
  for (const categoryImages of Object.values(imageMapByCategory)) {
    if (itemId in categoryImages) {
      return categoryImages[itemId as keyof typeof categoryImages];
    }
  }

  // Default fallback image
  return "/images/placeholder.jpg";
}

// Export all images as flat list for reference
export const allImages = {
  ...comboImages,
  ...burgerImages,
  ...friesImages,
  ...popsImages,
  ...rollImages,
  ...friedChickenImages,
  ...sandwichImages,
  ...shakeImages,
  ...hotDrinkImages,
  ...mojitosImages,
  ...dessertImages,
} as const;
