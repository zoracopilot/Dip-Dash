import { Link } from "react-router-dom";
import Container from "../layout/Container";
import AutoScrollCarousel from "../shared/AutoScrollCarousel";
import Chip from "../shared/Chip";
import { featuredPicks } from "@/data/foodItems";
import { foodCategories } from "@/data/foodCategories";

const FoodShowcaseSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <Container>
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#9f58bc]">
          Our Menu
        </h2>
        <p className="mt-3 text-base sm:text-lg text-black/60">
          Explore our delicious range of food and beverages
        </p>
      </div>
    </Container>

    {/* ================= Featured Picks ================= */}
    <div className="mb-12 sm:mb-16 mt-10">
      <h3 className="text-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#9f58bc]">
        Featured Picks
      </h3>

      {/* a little slower + smoother */}
      <AutoScrollCarousel speed={26}>
        {featuredPicks.map((item) => (
          <div
            key={item.id}
            className="
              w-[260px] h-[360px] glass-card rounded-2xl overflow-hidden group
              shadow-lg border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
              flex flex-col
              backdrop-blur-none
              will-change-transform
            "
          >
            <div className="relative h-56 overflow-hidden shrink-0 bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                loading="eager"
                decoding="async"
                draggable={false}
                className="
                  absolute inset-0 w-full h-full object-cover object-center
                  brightness-105 contrast-110 saturate-110
                  transform-gpu
                  group-hover:scale-110 transition-transform duration-700 ease-out
                  group-hover:brightness-125 group-hover:contrast-125
                  will-change-transform
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent" />

              {item.badge && (
                <div className="absolute top-3 right-3">
                  <Chip label={item.badge} />
                </div>
              )}
            </div>

            <div className="p-4 pb-5 bg-gradient-to-t from-black/30 via-black/10 to-transparent flex flex-col justify-between flex-1">
              <div>
                <h4 className="font-semibold text-white leading-tight line-clamp-1">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-300 mt-1 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </AutoScrollCarousel>
    </div>

    {/* ================= Food Categories ================= */}
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
        {foodCategories.map((cat) => (
          <Link
            key={cat.id}
            to="/food"
            className="
              group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3]
              glass-card transition-all duration-300
              hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
            "
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
                {cat.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {cat.itemCount} items
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <Link
          to="/food"
          className="inline-flex items-center px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#9f58bc] text-white text-sm sm:text-base font-semibold hover:bg-[#8a49a6] transition-all hover:scale-[1.02]"
        >
          View Full Menu
        </Link>
      </div>
    </Container>
  </section>
);

export default FoodShowcaseSection;