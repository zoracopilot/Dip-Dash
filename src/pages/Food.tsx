import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Flame, Heart } from "lucide-react";
import Container from "@/components/layout/Container";
import Chip from "@/components/shared/Chip";

import { allFoodItems } from "@/data/foodItems";
import { foodCategories } from "@/data/foodCategories";

const badges = [
  { icon: Sparkles, label: "100% Fresh" },
  { icon: Flame, label: "Hot & Spicy" },
  { icon: Heart, label: "Made with Love" },
];

const allCategories = [
  { id: "all", name: "All" },
  ...foodCategories.map((c) => ({ id: c.id, name: c.name })),
];

const Food = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? allFoodItems
      : allFoodItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-auto md:min-h-screen flex items-center pt-16 md:pt-20 lg:pt-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-[#9f58bc]">Dip & Dash Menu</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-black max-w-lg leading-relaxed">
                Explore our signature DIP & DASH menu featuring burgers, wraps,
                fried delights, premium shakes, and much more!
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-[#9f58bc] text-white text-xs sm:text-base font-semibold hover:bg-[#8a49a6] transition-all hover:scale-[1.02]"
                >
                  Browse Menu
                </button>

                <Link
                  to="/get-app"
                  className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-[#9f58bc]/40 text-[#9f58bc] text-xs sm:text-base font-semibold hover:bg-[#9f58bc]/10 transition-all"
                >
                  Order on App
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="glass flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
                  >
                    <Icon size={14} className="text-[#9f58bc] shrink-0" />
                    <span className="font-medium text-black hidden xs:inline">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT HERO IMAGE — IMAGE ONLY (NO BOX) */}
            <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
              <img
                src="/images/logos/dip-and-dash-logo.webp"
                alt="Dip & Dash Logo"
                decoding="async"
                draggable={false}
                className="
                  w-full
                  max-w-xs sm:max-w-sm md:max-w-md
                  h-auto
                  object-contain
                  animate-float
                  drop-shadow-2xl
                  transform-gpu
                "
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ================= MENU ================= */}
      <div
        className="pt-8 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-20"
        id="menu"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#9f58bc] text-white hover:bg-[#8a49a6]"
                    : "bg-[#9f58bc]/10 text-[#9f58bc] hover:bg-[#9f58bc]/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FOOD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-9 lg:gap-10">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden group shadow-lg
                transition-all duration-300 border border-white/10 backdrop-blur-sm
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
                hover:ring-2 hover:ring-[#9f58bc]/60
                hover:ring-offset-2 hover:ring-offset-white
                flex flex-col"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover object-center
                    group-hover:scale-110 transition-transform duration-700 ease-out"
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

                  <div className="mt-4 pt-2">
                    <Link
                      to="/get-app"
                      className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#9f58bc] hover:bg-[#8a49a6] text-white text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Order via App
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Food;