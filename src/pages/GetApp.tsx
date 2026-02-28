import { Smartphone, Gift, CreditCard, Zap, Package } from "lucide-react";
import Container from "@/components/layout/Container";

const benefits = [
  { icon: Gift, title: "Exclusive Offers", desc: "App-only deals and discounts" },
  { icon: CreditCard, title: "Easy Payments", desc: "Multiple payment options" },
  { icon: Zap, title: "Quick Delivery", desc: "Fast and reliable delivery" },
  { icon: Package, title: "App-only Combos", desc: "Special combos just for you" },
];

const GetApp = () => (
  <div
    className="
      min-h-[calc(100svh-72px)]
      flex items-center
      pt-20 sm:pt-24 md:pt-28
      pb-8
    "
    style={{ backgroundColor: "#ffffff" }}
  >
    <Container>
      <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">

        {/* Mobile Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-[#9f58bc]/15 flex items-center justify-center">
          <Smartphone size={30} className="text-[#9f58bc]" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#9f58bc] leading-tight">
          Get the Dip & Dash App Now!
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-black/70">
          Order Fast. Enjoy More.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="px-6 sm:px-10 py-3 rounded-full bg-[#9f58bc] text-white font-semibold hover:opacity-95 transition"
          >
            Download Now
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-full border border-[#9f58bc]/30 text-black hover:bg-[#9f58bc]/10 transition"
          >
            Play Store
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-full border border-[#9f58bc]/30 text-black hover:bg-[#9f58bc]/10 transition"
          >
            App Store
          </a>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#2f2f2f] rounded-2xl py-5 px-4 text-center space-y-2"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#9f58bc] flex items-center justify-center">
                <Icon size={20} className="text-white" />
              </div>

              <h3 className="text-white text-sm font-semibold">{title}</h3>
              <p className="text-white/70 text-xs">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </Container>
  </div>
);

export default GetApp;