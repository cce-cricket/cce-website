import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section 
      className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1550425891-45c7e89fec41?auto=format&fit=crop&q=80&w=2069")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/70" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Cricket Center of Excellence
          </h1>
          <p className="text-xl text-gold-light mb-8">
            Where passion meets excellence in cricket training and fitness
          </p>
          <Button variant="gold" size="large">
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}