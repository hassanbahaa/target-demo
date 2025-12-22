import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <div className="text-lg font-semibold text-foreground hidden sm:block">
              Target Hotel Marketing
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/testimonials"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="btn-primary">
                احجز استشارة
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/testimonials"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <Button className="btn-primary w-full">
                احجز استشارة
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
