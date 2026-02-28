import { getImagePath } from './imageMap';

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export const allFoodItems: FoodItem[] = [
  // Chicken Burgers
  { id: "dash-classic-chicken", name: "Dash Classic Chicken Supreme", description: "Tender juicy chicken with special sauce", category: "chicken-burgers", image: getImagePath("dash-classic-chicken", "chicken-burgers"), badge: "Featured", featured: true },
  { id: "smash-dash-chicken", name: "Smash Dash Chicken", description: "Smashed chicken patty, crispy & delicious", category: "chicken-burgers", image: getImagePath("smash-dash-chicken", "chicken-burgers"), badge: "Popular", featured: true },
  { id: "nashville-fire-dash", name: "Nashville Fire Dash Chicken", description: "Spicy Nashville-style fried chicken", category: "chicken-burgers", image: getImagePath("nashville-fire-dash", "chicken-burgers"), featured: true },
  { id: "korean-kick-dash", name: "Korean Kick Dash Chicken", description: "Korean-inspired spicy chicken delight", category: "chicken-burgers", image: getImagePath("korean-kick-dash", "chicken-burgers"), featured: true },
  { id: "royal-chicken-tower", name: "Royal Chicken Tower", description: "Stacked chicken layers with premium toppings", category: "chicken-burgers", image: getImagePath("royal-chicken-tower", "chicken-burgers"), featured: true },

  // Beef Burgers
  { id: "og-smash-beef", name: "OG Smash Beef Beast", description: "Original smashed beef patty, juicy & loaded", category: "beef-burgers", image: getImagePath("og-smash-beef", "beef-burgers"), badge: "Featured", featured: true },
  { id: "flame-grill-beef-dash", name: "Flame Grill Beef Dash", description: "Flame-grilled beef with smoky flavor", category: "beef-burgers", image: getImagePath("flame-grill-beef-dash", "beef-burgers"), featured: true },
  { id: "prime-beef-royale", name: "Prime Beef Royale", description: "Premium beef with luxurious toppings", category: "beef-burgers", image: getImagePath("prime-beef-royale", "beef-burgers"), featured: true },
  { id: "beef-blast-overload", name: "Beef Blast Overload", description: "Maximum beef flavor with extra toppings", category: "beef-burgers", image: getImagePath("beef-blast-overload", "beef-burgers"), featured: true },

  // Fish Burgers
  { id: "ocean-catch-dash", name: "Ocean Catch Dash", description: "Fresh ocean fish patty with tartar sauce", category: "fish-burgers", image: getImagePath("ocean-catch-dash", "fish-burgers"), featured: true },
  { id: "royal-fish-stack", name: "Royal Fish Stack", description: "Premium fish with royal garnish", category: "fish-burgers", image: getImagePath("royal-fish-stack", "fish-burgers"), featured: true },

  // Quick Bites
  { id: "loaded-dash-fries", name: "Signature Loaded Dash Fries", description: "Premium fries with signature toppings", category: "quick-bites", image: getImagePath("loaded-dash-fries", "quick-bites"), badge: "Featured", featured: true },
  { id: "cheesy-melt-fries", name: "Cheesy Melt Dash Fries", description: "Golden fries melted with cheese", category: "quick-bites", image: getImagePath("cheesy-melt-fries", "quick-bites"), featured: true },
  { id: "korean-heat-fries", name: "Korean Heat Fries", description: "Spicy Korean-style fries", category: "quick-bites", image: getImagePath("korean-heat-fries", "quick-bites"), featured: true },
  { id: "nashville-inferno-fries", name: "Nashville Inferno Fries", description: "Spicy Nashville-seasoned fries", category: "quick-bites", image: getImagePath("nashville-inferno-fries", "quick-bites"), featured: true },
  { id: "catch-crunch-combo", name: "Catch & Crunch Combo", description: "Fish & crispy combination", category: "quick-bites", image: getImagePath("catch-crunch-combo", "combos"), badge: "Featured", featured: true },

  // Pops & Boxes
  { id: "crispy-chicken-pops", name: "Crispy Chicken Dash Pops", description: "Golden crispy chicken bite-sized pops", category: "pops-boxes", image: getImagePath("crispy-chicken-pops", "pops-boxes"), badge: "Featured", featured: true },
  { id: "fire-blast-pops", name: "Fire Blast Chicken Pops", description: "Spicy chicken pops with fire kick", category: "pops-boxes", image: getImagePath("fire-blast-pops", "pops-boxes"), featured: true },
  { id: "seoul-spice-pops", name: "Seoul Spice Pops", description: "Korean seasoned spicy chicken pops", category: "pops-boxes", image: getImagePath("seoul-spice-pops", "pops-boxes"), featured: true },
  { id: "ultimate-party-box", name: "Ultimate Dash Party Box", description: "Assorted items perfect for sharing", category: "pops-boxes", image: getImagePath("ultimate-party-box", "combos"), badge: "Featured", featured: true },

  // Rolls
  { id: "turkish-flame-roll", name: "Turkish Flame Roll", description: "Turkish-style wrap with spicy sensation", category: "rolls", image: getImagePath("turkish-flame-roll", "rolls"), featured: true },
  { id: "mediterranean-crunch", name: "Mediterranean Crunch Roll", description: "Fresh Mediterranean ingredients in a wrap", category: "rolls", image: getImagePath("mediterranean-crunch", "rolls"), featured: true },
  { id: "smash-chicken-roll", name: "Smash Chicken Roll", description: "Smashed chicken with creamy sauce", category: "rolls", image: getImagePath("smash-chicken-roll", "rolls"), featured: true },
  { id: "fire-grill-roll", name: "Fire Grill Roll", description: "Flame-grilled ingredients in a spicy roll", category: "rolls", image: getImagePath("fire-grill-roll", "rolls"), featured: true },

  // Fryin' & Flyin'
  { id: "original-crispy-chicken", name: "Original Crispy Dash Chicken", description: "Classic crispy fried chicken", category: "fryin-flyin", image: getImagePath("original-crispy-chicken", "fryin-flyin"), badge: "Featured", featured: true },
  { id: "nashville-hot-fried", name: "Nashville Hot Fried Chicken", description: "Nashville hot spice fried chicken", category: "fryin-flyin", image: getImagePath("nashville-hot-fried", "fryin-flyin"), featured: true },
  { id: "golden-fish-fry", name: "Golden Fish Fry Dash", description: "Golden crispy fish fry", category: "fryin-flyin", image: getImagePath("golden-fish-fry", "fryin-flyin"), featured: true },
  { id: "crispy-shrimp-crunch", name: "Crispy Shrimp Crunch", description: "Crunchy golden shrimp", category: "fryin-flyin", image: getImagePath("crispy-shrimp-crunch", "fryin-flyin"), featured: true },
  { id: "ocean-chips-basket", name: "Ocean & Chips Basket", description: "Fish & chips combination basket", category: "fryin-flyin", image: getImagePath("ocean-chips-basket", "combos"), featured: true },
  { id: "golden-prawn-explosion", name: "Golden Prawn Explosion", description: "Generous portions of crispy prawns", category: "fryin-flyin", image: getImagePath("golden-prawn-explosion", "combos"), featured: true },

  // Sandwich Stacks
  { id: "fresh-garden-veg", name: "Fresh Garden Veg Stack", description: "Fresh vegetables with special dressing", category: "sandwiches", image: getImagePath("fresh-garden-veg", "sandwiches"), featured: true },
  { id: "veg-club-melt", name: "Veg Club Melt", description: "Layered vegetable club with melted cheese", category: "sandwiches", image: getImagePath("veg-club-melt", "sandwiches"), featured: true },
  { id: "cheesy-corn-blast", name: "Cheesy Corn Blast", description: "Corn with melted cheese sensation", category: "sandwiches", image: getImagePath("cheesy-corn-blast", "sandwiches"), featured: true },
  { id: "desi-tikki-deluxe", name: "Desi Tikki Deluxe", description: "Traditional spiced tikki sandwich", category: "sandwiches", image: getImagePath("desi-tikki-deluxe", "sandwiches"), featured: true },
  { id: "beef-supreme-stack", name: "Beef Supreme Stack", description: "Premium beef layered sandwich", category: "sandwiches", image: getImagePath("beef-supreme-stack", "sandwiches"), featured: true },

  // Premium Shakes
  { id: "nutella-power-dash", name: "Nutella Power Dash", description: "Nutella-chocolate shake perfection", category: "premium-shakes", image: getImagePath("nutella-power-dash", "premium-shakes"), badge: "Featured", featured: true },
  { id: "double-choco-blast", name: "Double Choco Blast", description: "Double chocolate indulgence", category: "premium-shakes", image: getImagePath("double-choco-blast", "premium-shakes"), featured: true },
  { id: "coconut-cream-royale", name: "Coconut Cream Royale", description: "Creamy tropical coconut shake", category: "premium-shakes", image: getImagePath("coconut-cream-royale", "premium-shakes"), featured: true },
  { id: "classic-coffee-kick", name: "Classic Coffee Kick", description: "Bold coffee flavor kick", category: "premium-shakes", image: getImagePath("classic-coffee-kick", "premium-shakes"), featured: true },
  { id: "milo-madness", name: "Milo Madness", description: "Milo-infused creamy shake", category: "premium-shakes", image: getImagePath("milo-madness", "premium-shakes"), featured: true },

  // Hot Specials
  { id: "hot-milo-comfort", name: "Hot Milo Comfort", description: "Warm comforting Milo drink", category: "hot-specials", image: getImagePath("hot-milo-comfort", "hot-specials"), featured: true },
  { id: "choco-heat", name: "Choco Heat", description: "Warm rich chocolate beverage", category: "hot-specials", image: getImagePath("choco-heat", "hot-specials"), featured: true },
  { id: "mocha-dash", name: "Mocha Dash", description: "Mocha blend of coffee and chocolate", category: "hot-specials", image: getImagePath("mocha-dash", "hot-specials"), featured: true },

  // Mojito Bar
  { id: "blue-lightning-mojito", name: "Blue Lightning Mojito", description: "Blue-colored refreshing mojito", category: "mojito-bar", image: getImagePath("blue-lightning-mojito", "mojito-bar"), featured: true },
  { id: "pink-paradise-mojito", name: "Pink Paradise Mojito", description: "Pink tropical paradise mojito", category: "mojito-bar", image: getImagePath("pink-paradise-mojito", "mojito-bar"), featured: true },
  { id: "berry-blast-mojito", name: "Berry Blast Mojito", description: "Mixed berry flavored mojito", category: "mojito-bar", image: getImagePath("berry-blast-mojito", "mojito-bar"), featured: true },
  { id: "melon-chill-mojito", name: "Melon Chill Mojito", description: "Refreshing melon mojito", category: "mojito-bar", image: getImagePath("melon-chill-mojito", "mojito-bar"), featured: true },
  { id: "raspberry-rush-mojito", name: "Raspberry Rush Mojito", description: "Raspberry-infused mojito", category: "mojito-bar", image: getImagePath("raspberry-rush-mojito", "mojito-bar"), featured: true },

  // Dessert Zone
  { id: "creamy-milk-punch", name: "Creamy Milk Punch", description: "Creamy milk-based dessert punch", category: "desserts", image: getImagePath("creamy-milk-punch", "desserts"), featured: true },
  { id: "brownie-bliss-bowl", name: "Brownie Bliss Bowl", description: "Decadent brownie dessert bowl", category: "desserts", image: getImagePath("brownie-bliss-bowl", "desserts"), featured: true },
  { id: "dubai-royal-delight", name: "Dubai Royal Delight", description: "Premium royal dessert inspired by Dubai", category: "desserts", image: getImagePath("dubai-royal-delight", "desserts"), featured: true },
];

export const featuredPicks = allFoodItems.filter(item => item.featured);
