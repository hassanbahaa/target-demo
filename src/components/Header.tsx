import { Button } from "@/components/ui/button";
import { Menu, Languages } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import targetLogo from "@/assets/targetlogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={targetLogo} 
              alt="Target Hotel Marketing Logo" 
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
            />
            <div className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
              Target Hotel Marketing
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/testimonials"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.testimonials')}
            </Link>
            <Link 
              to="/contact"
              className={`text-foreground hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-border hover:bg-muted transition-all duration-300"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "ar" ? "EN" : "عربي"}</span>
            </button>
            <Link to="/contact">
              <Button className="btn-primary">
                {t('nav.cta')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-border hover:bg-muted transition-all duration-300"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-medium">{language === "ar" ? "EN" : "عربي"}</span>
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/services') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/testimonials"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/testimonials') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.testimonials')}
            </Link>
            <Link 
              to="/contact"
              onClick={closeMenu}
              className={`block w-full text-left py-2 text-foreground hover:text-primary transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : ''}`}
            >
              {t('nav.contact')}
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <Button className="btn-primary w-full">
                {t('nav.cta')}
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
