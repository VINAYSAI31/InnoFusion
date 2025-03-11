
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <Link to="/">
  <img src="/images/logo.png" alt="Hackathon Logo" className="h-8 md:h-8" />
</Link>
        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" currentPath={location.pathname}>
            Home
          </NavLink>
          <NavLink to="/software-track" currentPath={location.pathname}>
            Software Track
          </NavLink>
          <NavLink to="/hardware-track" currentPath={location.pathname}>
            Hardware Track
          </NavLink>
          <Link
            to="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hackathon-blue text-white px-5 py-2 rounded-full font-medium transform transition-all hover:bg-hackathon-blue-light hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Register Now
          </Link>
        </nav> */}

        {/* Mobile menu button */}
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-hackathon-blue"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Navigation */}
      {/* <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" currentPath={location.pathname}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/software-track" currentPath={location.pathname}>
            Software Track
          </MobileNavLink>
          <MobileNavLink to="/hardware-track" currentPath={location.pathname}>
            Hardware Track
          </MobileNavLink>
          <Link
            to="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-hackathon-blue text-white px-5 py-3 rounded-md font-medium text-center transition-all hover:bg-hackathon-blue-light"
          >
            Register Now
          </Link>
        </div>
      </div> */}
    </header>
  );
};

type NavLinkProps = {
  to: string;
  currentPath: string;
  children: React.ReactNode;
};

const NavLink = ({ to, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`font-medium transition-all ${
        isActive
          ? "text-hackathon-blue"
          : "text-hackathon-gray-dark hover:text-hackathon-blue"
      } link-underline`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`font-medium p-2 rounded-md transition-colors ${
        isActive
          ? "bg-hackathon-gray-light text-hackathon-blue"
          : "text-hackathon-gray-dark hover:bg-hackathon-gray-light hover:text-hackathon-blue"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
