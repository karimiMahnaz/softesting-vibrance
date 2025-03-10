
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-softesting-muted py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Sof</span>
                <span className="text-softesting-accent">Testing</span>
              </span>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              Innovative software solutions powered by AI technology. 
              We specialize in design, development, and testing to deliver 
              cutting-edge applications that solve real business problems.
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} SofTesting. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Software Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#ai-showcase" className="text-white/70 hover:text-white transition-colors">AI Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 sm:mb-0">
            Located in Winnipeg, Manitoba, Canada
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-softesting-muted text-white/70 hover:text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
