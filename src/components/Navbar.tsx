
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import '@/styles/button.css';

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const navbarHeight = 100; // Account for navbar height and some padding
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 py-6 px-4 sm:px-6 lg:px-8 z-50 backdrop-blur-md bg-soraaya-space-blue/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-soraaya-white font-heading">
            SORAAYA AI
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-soraaya-white hover:text-soraaya-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-8">
          <a 
            href="#services" 
            onClick={(e) => handleScroll(e, 'services')} 
            className="text-soraaya-white/80 hover:text-soraaya-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#demo" 
            onClick={(e) => handleScroll(e, 'demo')} 
            className="text-soraaya-white/80 hover:text-soraaya-white transition-colors"
          >
            Demo
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')} 
            className="text-soraaya-white/80 hover:text-soraaya-white transition-colors"
          >
            Contact
          </a>
          <Button 
            className="bg-soraaya-indigo hover:bg-soraaya-indigo/90 text-soraaya-white button-lift"
            onClick={(e) => handleScroll(e as any, 'contact')}
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden fixed top-[80px] left-0 right-0 bg-soraaya-space-blue/95 backdrop-blur-md p-4 glass-card border-t border-white/10 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={(e) => {
                handleScroll(e, 'services');
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
            <a 
              href="#demo" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={(e) => {
                handleScroll(e, 'demo');
                setIsMenuOpen(false);
              }}
            >
              Demo
            </a>
            <a 
              href="#contact" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={(e) => {
                handleScroll(e, 'contact');
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
            <Button 
              className="bg-soraaya-indigo hover:bg-soraaya-indigo/90 text-soraaya-white w-full button-lift"
              onClick={(e) => {
                handleScroll(e as any, 'contact');
                setIsMenuOpen(false);
              }}
            >
              Book a Call
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
