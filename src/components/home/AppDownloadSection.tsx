import { Smartphone, Gift, CreditCard, Zap, Package } from "lucide-react";
import Container from "../layout/Container";

const benefits = [
  { icon: Gift, label: "Exclusive Offers" },
  { icon: CreditCard, label: "Easy Payments" },
  { icon: Zap, label: "Quick Delivery" },
  { icon: Package, label: "App-only Combos" },
];

const AppDownloadSection = () => (
  <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
    <Container className="relative">
      <div className="text-center space-y-6 md:space-y-8 max-w-2xl mx-auto">

        {/* Top Icon */}
        <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-[#9f58bc]/20 flex items-center justify-center glow-lavender-sm">
          <Smartphone size={24} className="text-[#9f58bc]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#9F58BC]">
          Get the Dip & Dash App Now!
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-black">
          Order Fast. Enjoy More.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          <a
            href="#"
            className="inline-flex items-center px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#9f58bc] text-white text-sm sm:text-base font-semibold hover:bg-[#8a49a6] transition-all glow-lavender-sm hover:scale-[1.02]"
          >
            Download Now
          </a>

          <a
            href="#"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#9f58bc]/40 text-black text-sm sm:text-base font-medium hover:bg-[#9f58bc]/10 transition-all"
          >
            Play Store
          </a>

          <a
            href="#"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#9f58bc]/40 text-black text-sm sm:text-base font-medium hover:bg-[#9f58bc]/10 transition-all"
          >
            App Store
          </a>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="
                bg-[#333333]
                p-4 sm:p-5
                rounded-xl
                text-center
                space-y-3
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_35px_rgba(159,88,188,0.35)]
                hover:ring-2 hover:ring-[#9f58bc]/60
                hover:ring-offset-2 hover:ring-offset-white
              "
            >
              {/* Pink Icon Box */}
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#9f58bc] flex items-center justify-center shadow-md">
                <Icon size={18} className="text-white" />
              </div>

              {/* Label */}
              <span className="text-xs sm:text-sm font-medium text-white">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </Container>
  </section>
);

export default AppDownloadSection;