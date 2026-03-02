import { Link } from "react-router-dom";
import { Zap, Users, Gift } from "lucide-react";
import Container from "@/components/layout/Container";
import AutoScrollCarousel from "@/components/shared/AutoScrollCarousel";
import Chip from "@/components/shared/Chip";
import { allCombos } from "@/data/combos";

const badges = [
  { icon: Zap, label: "Quick Service" },
  { icon: Users, label: "Family Friendly" },
  { icon: Gift, label: "Amazing Value" },
];

const Combos = () => (
  <>
    {/* HERO */}
    <section className="relative min-h-auto md:min-h-screen flex items-center pt-16 md:pt-20 lg:pt-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-[#9f58bc]">Combo Deals</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-black max-w-lg leading-relaxed">
              Get more flavor for less — explore our specially curated combo meals designed to satisfy every craving and budget.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("combos-menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-[#9f58bc] text-white text-xs sm:text-base font-semibold hover:bg-[#8a49a6] transition-all hover:scale-[1.02]"
              >
                Explore Combos
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

          <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-4 rounded-3xl glow-lavender opacity-30" />
              <div className="aspect-square overflow-hidden rounded-3xl relative">
                <img
                  src="/images/combos/ultimate-dash-party-box.webp"
                  alt="Delicious food combos"
                  className="w-full h-full object-cover object-center animate-float filter brightness-110 contrast-110 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    {/* MENU */}
    <div
      className="pt-8 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-20 min-h-auto"
      id="combos-menu"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #f6f2ff 0%, #ffffff 40%, #f8f5ff 100%)",
      }}
    >
      <Container>
        {/* POPULAR */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#9f58bc]">
            Popular Combos
          </h3>

          <AutoScrollCarousel>
            {allCombos.map((combo) => (
              <div
                key={combo.id}
                className="
                  w-[240px] sm:w-[280px] md:w-[300px] glass-card rounded-xl sm:rounded-2xl overflow-hidden group
                  transition-all duration-300 border border-white/10 backdrop-blur-sm
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
                  hover:ring-2 hover:ring-[#9f58bc]/60
                  hover:ring-offset-2 hover:ring-offset-white
                "
              >
                <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-white">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover object-center brightness-120 contrast-135 saturate-125 group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <Chip label={combo.badge} />
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-gradient-to-t from-black/30 via-black/10 to-transparent">
                  <h4 className="font-semibold text-white text-sm sm:text-base line-clamp-2">
                    {combo.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2">
                    {combo.description}
                  </p>
                </div>
              </div>
            ))}
          </AutoScrollCarousel>
        </div>

        {/* GRID (✅ added 2 extra cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {[...allCombos, ...allCombos.slice(0, 2)].map((combo, index) => (
            <div
              key={`${combo.id}-${index}`}
              className="
                glass-card rounded-xl sm:rounded-2xl overflow-hidden group
                transition-all duration-300 border border-white/10 backdrop-blur-sm
                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
                hover:ring-2 hover:ring-[#9f58bc]/60
                hover:ring-offset-2 hover:ring-offset-white
              "
            >
              <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-white">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover object-center brightness-120 contrast-135 saturate-125 group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                  <Chip label="Available on App" />
                </div>
              </div>

              <div className="p-3 sm:p-5 bg-gradient-to-t from-black/30 via-black/10 to-transparent">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 line-clamp-2">
                  {combo.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 line-clamp-2">
                  {combo.description}
                </p>
                <p className="text-xs text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                  {combo.items.join(" • ")}
                </p>

                <Link
                  to="/get-app"
                  className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#9f58bc] hover:bg-[#8a49a6] text-white text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get on App
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  </>
);

export default Combos;