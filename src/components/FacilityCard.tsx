import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FacilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link?: string;
}

export default function FacilityCard({ title, description, icon, image, link }: FacilityCardProps) {
  const CardButton = () => (
    <button className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
      Know More <ArrowRight className="w-4 h-4" />
    </button>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-grey-dark rounded-xl shadow-xl overflow-hidden border border-gold/20"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-gold">{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        {link ? (
          <Link to={link}>
            <CardButton />
          </Link>
        ) : (
          <CardButton />
        )}
      </div>
    </motion.div>
  );
}