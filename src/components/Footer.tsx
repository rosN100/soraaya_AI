
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10">
          {/* Logo */}
          <div className="w-1/4">
            <h3 className="text-xl font-bold text-soraaya-white font-heading">SORAAYA AI</h3>
          </div>

          {/* Quick Links */}
          <div className="mt-6 md:mt-0 w-1/2 text-center">
            <h4 className="text-lg font-medium text-soraaya-white mb-4">Quick Links</h4>
            <div className="flex flex-row justify-center space-x-6">
              <a href="#services" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Services
              </a>
              <a href="#demo" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Demo
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 md:mt-0 w-1/4 text-right">
            <h4 className="text-lg font-medium text-soraaya-white mb-4">Get in Touch</h4>
            <div className="flex flex-col space-y-2">
              <p className="text-soraaya-white/70">help@soraaya.in</p>
              <p className="text-soraaya-white/70">+918884154540</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 text-center text-soraaya-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Soraaya AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
