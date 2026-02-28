import { UtensilsCrossed, Users, Timer, Award } from "lucide-react";
import Container from "../layout/Container";
import SectionHeader from "../shared/SectionHeader";

const values = [
  {
    icon: UtensilsCrossed,
    title: "Passion for Fresh Food",
    desc: "Every dish crafted with love and the freshest ingredients",
  },
  {
    icon: Users,
    title: "Youthful Experience",
    desc: "A vibrant dining experience designed for the modern foodie",
  },
  {
    icon: Timer,
    title: "Quick Service",
    desc: "Lightning-fast preparation without compromising quality",
  },
  {
    icon: Award,
    title: "High Quality",
    desc: "Premium ingredients sourced from trusted suppliers",
  },
];

const AboutSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <Container>
      <SectionHeader
        title={<span className="text-[#9f58bc]">Why Dip & Dash?</span>}
        subtitle={
          <span className="text-black">
            We're on a mission to make every meal memorable
          </span>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        {values.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="
              rounded-lg sm:rounded-2xl flex gap-3 sm:gap-4
              p-4 sm:p-6
              bg-[#333333] text-white
              shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
            "
          >
            {/* Icon Box */}
            <div className="w-10 sm:w-12 h-10 sm:h-12 shrink-0 rounded-lg sm:rounded-xl bg-[#9f58bc] flex items-center justify-center">
              <Icon size={18} className="text-white" />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-1 text-[#9f58bc]">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutSection;