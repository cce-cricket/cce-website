import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { navLinks } from '../constants/navigation';
import Logo from './Logo';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-grey-dark/95 backdrop-blur-sm shadow-xl z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo className="text-gold" />
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gold hover:text-gold-light transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-gold">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}