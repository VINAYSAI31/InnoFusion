
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hackathon-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-hackathon-orange">INNO</span>FUSION
            </h3>
            <p className="text-gray-300 max-w-xs">
              Join the INFUSION Hackathon to innovate, collaborate,
              and create solutions for real-world problems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/software-track">Software Track</FooterLink>
              <FooterLink to="/hardware-track">Hardware Track</FooterLink>
              <FooterLink to="https://forms.google.com">Register</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>KLUniversity, Vijayawada</span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="mailto:hackathon@example.com"
                  className="hover:text-white transition-colors"
                >
                  datascience.sods@kluniveristy.in
                </a>
              </p>
              {/* <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +123 456 7890
                </a>
              </p> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Organized By</h3>
            <div className="space-y-2 text-gray-300">
              <p>SODS Club</p>
              <p>Garuda Club</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} SODS & Garuda Hackathon. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  to: string;
  children: React.ReactNode;
};

const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

export default Footer;
