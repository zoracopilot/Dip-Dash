import { Link } from "react-router-dom";
import { Sparkles, Shield, Award } from "lucide-react";
import Container from "../layout/Container";
import heroImage from "@/assets/hero-food.jpg";

const badges = [
  { icon: Sparkles, label: "Freshly Prepared" },
  { icon: Award, label: "Premium Taste" },
  { icon: Shield, label: "Hygienic Packaging" },
];

const HeroSection = () => (
  <section className="relative min-h-auto md:min-h-screen flex items-center pt-16 md:pt-20 lg:pt-24 bg-white text-black">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">
            Fresh Food.{" "}
            <span className="text-[#9f58bc]">Fast Delivery.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-lg leading-relaxed">
            Delicious milkshakes, refreshing juices, and satisfying fast food made for every craving.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Link
              to="/food"
              className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-[#9f58bc] text-white text-xs sm:text-base font-semibold hover:bg-[#8a49a6] transition-all hover:scale-[1.02]"
            >
              Explore Food
            </Link>

            <Link
              to="/get-app"
              className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-[#9f58bc]/40 text-black text-xs sm:text-base font-semibold hover:bg-[#9f58bc]/10 transition-all"
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
                <Icon size={14} className="sm:block text-[#9f58bc] shrink-0" aria-hidden="true" />
                <span className="font-medium text-black hidden xs:inline">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center mt-6 sm:mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl bg-[#9f58bc]" />

            <img
              src={heroImage}
              alt="Delicious food composition with burgers, fries and shakes"
              className="relative w-full h-auto rounded-3xl object-contain animate-float filter brightness-110 contrast-110 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default HeroSection;