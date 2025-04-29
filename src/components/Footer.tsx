
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 mt-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-soraaya-white font-heading">SORAAYA AI</h3>
            <p className="text-soraaya-white/70 max-w-xs">
              AI employees that never sleep, at a fraction of the cost.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-soraaya-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#services" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Services
              </a>
              <a href="#demo" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Demo
              </a>
              <a href="#" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-soraaya-white/70 hover:text-soraaya-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-soraaya-white">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-soraaya-white/70">hello@soraaya.ai</p>
              <p className="text-soraaya-white/70">+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-white/10 border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.05A8 8 0 1 1 0 8.05 8 8 0 0 1 16 8.05zm-8 3.49a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm6.5-3.49c0-3.59-2.91-6.5-6.5-6.5S1.5 4.46 1.5 8.05s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent hover:bg-white/10 border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.15C0 .52.52 0 1.15 0h13.7C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.15 1.15H1.15C.52 16 0 15.48 0 14.85V1.15zm4.37 12.7h2.5V6.38H4.37v7.47zM5.62 5.34a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9zm8.55 8.53h-2.5V9.66c0-.94-.02-2.14-1.3-2.14-1.3 0-1.5 1.02-1.5 2.07v4.27h-2.5V6.38h2.4v1.1h.03c.34-.63 1.15-1.3 2.37-1.3 2.54 0 3 1.67 3 3.84v3.85z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-soraaya-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Soraaya AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
