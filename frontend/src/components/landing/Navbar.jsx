import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Code, Download, Menu, X, Star, Github } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-border shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-primary">VisualDebug</span>
                <div className="text-xs text-muted-foreground">VS Code Extension</div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm text-foreground hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('usecases')} className="text-sm text-foreground hover:text-primary transition-colors">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-sm text-foreground hover:text-primary transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-foreground hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm text-foreground hover:text-primary transition-colors">
                Reviews
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                <Github className="w-4 h-4 mr-2" />
                <Star className="w-4 h-4 mr-1" />
                Star on GitHub
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                <Download className="w-4 h-4 mr-2" />
                Install Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <button onClick={() => scrollToSection('features')} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('usecases')} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                Reviews
              </button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full max-w-xs">
                <Download className="w-5 h-5 mr-2" />
                Install Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;