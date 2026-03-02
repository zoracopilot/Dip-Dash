import { UtensilsCrossed, Users, Timer, Award, Heart, Star } from "lucide-react";
import Container from "@/components/layout/Container";

const values = [
  {
    icon: UtensilsCrossed,
    title: "Passion for Fresh Food",
    desc: "We believe every meal should be a celebration of freshness. Our kitchen runs on passion and premium ingredients.",
  },
  {
    icon: Users,
    title: "Youthful Food Experience",
    desc: "We're a brand built by food lovers, for food lovers. Young, vibrant, and always exciting.",
  },
  {
    icon: Timer,
    title: "Quick Service Philosophy",
    desc: "Time matters. We prepare your food fast without ever cutting corners on taste or quality.",
  },
  {
    icon: Award,
    title: "High-Quality Ingredients",
    desc: "From farm-fresh produce to premium sauces, every ingredient is handpicked for perfection.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every dish is crafted with care, attention, and a generous serving of love.",
  },
  {
    icon: Star,
    title: "Customer First",
    desc: "Your satisfaction drives us. We listen, adapt, and always strive to exceed expectations.",
  },
];

const About = () => (
  <div className="pt-16 md:pt-24 pb-16 md:pb-20 min-h-screen bg-white">
    <Container>
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
          <span className="text-[#9f58bc]">About Dip & Dash</span>
        </h1>

        <p className="text-black text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We started with a simple idea make delicious food accessible, fast, and unforgettable.
          Today, Dip & Dash is where cravings meet satisfaction.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
        {values.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="
              p-4 sm:p-6 rounded-lg sm:rounded-2xl
              bg-[#333333] text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(159,88,188,0.35)]
              hover:ring-2 hover:ring-[#9f58bc]/60
              hover:ring-offset-2 hover:ring-offset-white
            "
          >
            {/* ICON CONTAINER */}
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#9f58bc] flex items-center justify-center mb-3 sm:mb-4 shadow-md">
              <Icon size={18} className="text-white" />
            </div>

            {/* TITLE */}
            <h3 className="font-bold text-base sm:text-lg mb-2 text-[#9f58bc]">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default About;