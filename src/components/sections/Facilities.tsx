import React from 'react';
import { motion } from 'framer-motion';
import FacilityCard from '../FacilityCard';
import { facilities } from '../../data/facilities';

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-dark text-center mb-12"
        >
          Our World-Class Facilities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FacilityCard {...facility} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}