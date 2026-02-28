import { Link } from "react-router-dom";
import Container from "../layout/Container";
import SectionHeader from "../shared/SectionHeader";
import Chip from "../shared/Chip";
import { homeCombos } from "@/data/combos";

const CombosSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <Container>
      <SectionHeader
        title={<span className="text-[#9f58bc]">Combo Deals</span>}
        subtitle={
          <span className="text-black">
            Save more with our specially curated combo meals
          </span>
        }
      />

      {/* ✅ Added 2 extra combos to fill grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {[...homeCombos, ...homeCombos.slice(0, 2)].map((combo, index) => (
          <div
            key={`${combo.id}-${index}`}
            className="
              glass-card rounded-2xl overflow-hidden group
              shadow-lg
              border border-white/10 backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
            "
          >
            {/* Image */}
            <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
              <img
                src={combo.image}
                alt={combo.name}
                className="
                  w-full h-full object-cover object-top
                  brightness-105 contrast-110 saturate-110
                  group-hover:scale-110
                  transition-transform duration-700 ease-out
                  filter group-hover:brightness-125 group-hover:contrast-125
                "
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent" />

              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                <Chip label="Available on App" />
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-5 bg-gradient-to-t from-black/30 via-black/10 to-transparent">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 line-clamp-2">
                {combo.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                {combo.description}
              </p>

              <Link
                to="/get-app"
                className="
                  inline-flex items-center
                  px-4 sm:px-5 py-1.5 sm:py-2
                  rounded-full
                  bg-[#9f58bc] hover:bg-[#8a49a6]
                  text-white text-xs sm:text-sm font-semibold
                  shadow-lg hover:scale-105
                  transition-all duration-300
                  w-full sm:w-auto
                  justify-center sm:justify-start
                "
              >
                Order on App
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default CombosSection;