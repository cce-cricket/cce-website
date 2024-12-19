import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../constants/animations';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-16 px-4 bg-dark">
      <div className="container mx-auto text-center">
        <motion.div
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Cricket Center of Excellence today and take your game to the next level
          </p>
          <Button variant="secondary">Book a Free Trial</Button>
        </motion.div>
      </div>
    </section>
  );
}