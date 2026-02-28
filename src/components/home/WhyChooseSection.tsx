import { Zap, Leaf, DollarSign, Heart } from "lucide-react";
import Container from "../layout/Container";

const features = [
  {
    icon: Zap,
    title: "Passion for Fresh Food",
    desc: "Every dish crafted with love and the freshest ingredients",
  },
  {
    icon: Leaf,
    title: "Youthful Experience",
    desc: "A vibrant dining experience designed for the modern foodie",
  },
  {
    icon: DollarSign,
    title: "Quick Service",
    desc: "Lightning-fast preparation without compromising quality",
  },
  {
    icon: Heart,
    title: "High Quality",
    desc: "Premium ingredients sourced from trusted suppliers",
  },
];

const WhyChooseSection = () => (
  <section className="py-12 sm:py-16 border-y border-border/50 bg-white">
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="
              text-center space-y-2 sm:space-y-3
              p-3 sm:p-6
              rounded-lg sm:rounded-2xl
              bg-[#333333] text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
            "
          >
            {/* ICON BOX */}
            <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto rounded-lg sm:rounded-xl bg-[#9f58bc] flex items-center justify-center shadow-md">
              <Icon size={18} className="text-white" />
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-xs sm:text-base text-[#9f58bc]">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-white line-clamp-1 sm:line-clamp-none">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default WhyChooseSection;