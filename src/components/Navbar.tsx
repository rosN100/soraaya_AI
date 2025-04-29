
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-4 sm:px-6 lg:px-8 relative z-10">
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
          <a href="#services" className="text-soraaya-white/80 hover:text-soraaya-white transition-colors">
            Services
          </a>
          <a href="#demo" className="text-soraaya-white/80 hover:text-soraaya-white transition-colors">
            Demo
          </a>
          <a href="#contact" className="text-soraaya-white/80 hover:text-soraaya-white transition-colors">
            Contact
          </a>
          <Button className="bg-soraaya-indigo hover:bg-soraaya-indigo/90 text-soraaya-white">
            Book a Call
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-soraaya-space-blue/95 backdrop-blur-md p-4 glass-card border-t border-white/10 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#demo" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#contact" 
              className="text-soraaya-white/80 hover:text-soraaya-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-soraaya-indigo hover:bg-soraaya-indigo/90 text-soraaya-white w-full"
              onClick={() => setIsMenuOpen(false)}
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
