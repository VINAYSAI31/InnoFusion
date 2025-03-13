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
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="absolute inset-0 bg-gradient-to-b from-hackathon-blue/5 to-white/80  py-2" 
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
       
       <div className="hidden md:flex items-center gap-20">
       <img src="/cse.png" alt="Sponsor 1" className="h-[6.5rem] w-[11rem] object-contain flex-none" />
      <img src="/fest.png" alt="Sponsor 2" className="h-[3.5rem] w-[14rem] object-contain flex-none" />
      <img src="/logo.png" alt="Sponsor 3" className="h-[7.5rem] w-[17rem] object-contain flex-none" />
      <img src="/sods.png" alt="Sponsor 3" className="h-[6.3rem] w-[11rem] object-contain flex-none" />
      <img src="/garuda.jpg" alt="Sponsor 4" className="h-[5.3rem] w-[16rem] object-contain flex-none" />
</div>

            </div>

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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-hackathon-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
    

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0  backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
        </div> */}
      </div>
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
