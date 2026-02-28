import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Container from "./Container";

const Footer = () => (
  <footer className="bg-card border-t border-border pt-12 sm:pt-16 pb-6 md:pb-8">
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-8 md:mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#9f58bc]">
            Dip <span className="text-[#9f58bc]">&</span> Dash
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Fresh food, fast delivery. Your cravings, our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
            Quick Links
          </h4>
          <div className="space-y-1 sm:space-y-2">
            <Link
              to="/food"
              className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Food & Drinks
            </Link>
            <Link
              to="/combos"
              className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Combos
            </Link>
            <Link
              to="/about"
              className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/get-app"
              className="block text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Get the App
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
            Contact
          </h4>
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
            <p>hello@dipanddash.com</p>
            <p>+91 98765 43210</p>
            <p>Chennai, India</p>
          </div>
        </div>

        {/* Follow + Map */}
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
            Follow Us
          </h4>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3 mb-4">
            <a
              href="https://www.instagram.com/dip_dash_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61588653539803"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            >
              <Facebook size={16} />
            </a>

            <a
              href="https://www.youtube.com/@DipandDash2.o"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            >
              <Youtube size={16} />
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-32 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=12.9697368,80.2485717&z=17&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              title="Dip & Dash Location"
            />
          </div>

          {/* App link */}
          <div className="mt-3 sm:mt-4">
            <Link
              to="/get-app"
              className="text-xs sm:text-sm text-primary hover:underline"
            >
              Download App →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground gap-3 md:gap-0">
        <p>© 2026 Dip & Dash. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;