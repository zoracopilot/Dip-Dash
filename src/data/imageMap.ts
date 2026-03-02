/**
 * Image mapping for food items and combos
 * Combos images are stored in: /images/combos/
 * Individual food images are stored in: /images/
 */

// Combo Images Mapping
export const comboImages = {
  "catch-crunch-combo": "/images/combos/catch-and-crunch-combo.webp",
  "ultimate-party-box": "/images/combos/ultimate-dash-party-box.webp",
  "ocean-chips-basket": "/images/combos/ocean-and-chips-basket.webp",
  "golden-prawn-explosion": "/images/combos/golden-prawn-explosion.webp",
} as const;

// Individual Food Images - Burgers
export const burgerImages = {
  "dash-classic-chicken": "/images/dash-classic-chicken-supreme.webp",
  "smash-dash-chicken": "/images/smash-dash-chicken.webp",
  "nashville-fire-dash": "/images/nashville-fire-dash-chicken.webp",
  "korean-kick-dash": "/images/korean-kick-dash-chicken.webp",
  "royal-chicken-tower": "/images/royal-chicken-tower.webp",
  "og-smash-beef": "/images/og-smash-beef-beast.webp",
  "flame-grill-beef-dash": "/images/flame-grill-beef-dash.webp",
  "prime-beef-royale": "/images/prime-beef-royale.webp",
  "beef-blast-overload": "/images/beef-blast-overload.webp",
  "ocean-catch-dash": "/images/ocean-catch-dash.webp",
  "royal-fish-stack": "/images/royal-fish-stack.webp",
} as const;

// Individual Food Images - Quick Bites & Fries
export const friesImages = {
  "loaded-dash-fries": "/images/signature-loaded-dash-fries.webp",
  "cheesy-melt-fries": "/images/cheesy-melt-dash-fries.webp",
  "korean-heat-fries": "/images/korean-heat-fries.webp",
  "nashville-inferno-fries": "/images/nashville-inferno-fries.webp",
  "catch-crunch-combo": "/images/combos/catch-and-crunch-combo.webp",
} as const;

// Individual Food Images - Pops & Boxes
export const popsImages = {
  "crispy-chicken-pops": "/images/crispy-chicken-dash-pops.webp",
  "fire-blast-pops": "/images/fire-blast-chicken-pops.webp",
  "seoul-spice-pops": "/images/seoul-spice-pops.webp",
  "ultimate-party-box": "/images/combos/ultimate-dash-party-box.webp",
} as const;

// Individual Food Images - Rolls
export const rollImages = {
  "turkish-flame-roll": "/images/turkish-flame-roll.webp",
  "mediterranean-crunch": "/images/mediterranean-crunch-roll.webp",
  "smash-chicken-roll": "/images/smash-chicken-roll.webp",
  "fire-grill-roll": "/images/fire-grill-roll.webp",
} as const;

// Individual Food Images - Fried Chicken & Seafood
export const friedChickenImages = {
  "original-crispy-chicken": "/images/original-crispy-dash-chicken.webp",
  "nashville-hot-fried": "/images/nashville-hot-fried-chicken.webp",
  "golden-fish-fry": "/images/golden-fish-fry-dash.webp",
  "crispy-shrimp-crunch": "/images/crispy-shrimp-crunch.webp",
  "ocean-chips-basket": "/images/combos/ocean-and-chips-basket.webp",
  "golden-prawn-explosion": "/images/combos/golden-prawn-explosion.webp",
} as const;

// Individual Food Images - Sandwiches
export const sandwichImages = {
  "fresh-garden-veg": "/images/fresh-garden-veg-stack.webp",
  "veg-club-melt": "/images/veg-club-melt.webp",
  "cheesy-corn-blast": "/images/cheesy-corn-blast.webp",
  "desi-tikki-deluxe": "/images/desi-tikki-deluxe.webp",
  "beef-supreme-stack": "/images/beef-supreme-stack.webp",
} as const;

// Individual Food Images - Premium Shakes
export const shakeImages = {
  "nutella-power-dash": "/images/nutella-power-dash.webp",
  "double-choco-blast": "/images/double-choco-blast.webp",
  "coconut-cream-royale": "/images/coconut-cream-royale.webp",
  "classic-coffee-kick": "/images/classic-coffee-kick.webp",
  "milo-madness": "/images/milo-madness.webp",
} as const;

// Individual Food Images - Hot Specials
export const hotDrinkImages = {
  "hot-milo-comfort": "/images/hot-milo-comfort.webp",
  "choco-heat": "/images/choco-heat.webp",
  "mocha-dash": "/images/mocha-dash.webp",
} as const;

// Individual Food Images - Mojito Bar
export const mojitosImages = {
  "blue-lightning-mojito": "/images/blue-lightning-mojito.webp",
  "pink-paradise-mojito": "/images/pink-paradise-mojito.webp",
  "berry-blast-mojito": "/images/berry-blast-mojito.webp",
  "melon-chill-mojito": "/images/melon-chill-mojito.webp",
  "raspberry-rush-mojito": "/images/raspberry-rush-mojito.webp",
  "creamy-milk-punch": "/images/creamy-milk-punch.webp",
} as const;

// Individual Food Images - Desserts
export const dessertImages = {
  "creamy-milk-punch": "/images/creamy-milk-punch.webp",
  "brownie-bliss-bowl": "/images/brownie-bliss-bowl.webp",
  "dubai-royal-delight": "/images/dubai-royal-delight.webp",
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
    const categoryMap =
      imageMapByCategory[category as keyof typeof imageMapByCategory];
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
  return "/images/placeholder.webp";
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