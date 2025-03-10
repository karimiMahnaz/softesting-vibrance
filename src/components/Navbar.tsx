
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'AI Integration', href: '#ai-showcase' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md',
        scrolled ? 'bg-softesting-dark/80 py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-10">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Sof</span>
            <span className="text-softesting-accent">Testing</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="primary" 
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={() => window.location.href = '#contact'}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-10 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-softesting-dark/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="primary" 
            size="md"
            icon={<ChevronRight size={18} />}
            onClick={() => {
              window.location.href = '#contact';
              setIsOpen(false);
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
