import React from 'react';
import { Icons } from '../components/icons';

export const facilities = [
  {
    title: "Cricket Coaching",
    description: "World-class coaching from experienced professionals. Learn techniques, strategy, and mental aspects of cricket.",
    icon: <Icons.Cricket className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Modern Gym",
    description: "State-of-the-art fitness equipment and personal training for cricket-specific strength and conditioning.",
    icon: <Icons.Gym className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Sports Café",
    description: "Healthy and delicious meals, protein shakes, and refreshments to fuel your training sessions.",
    icon: <Icons.Cafe className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Cricket Turf",
    description: "Premium cricket turf available for booking. Perfect for practice sessions and friendly matches.",
    icon: <Icons.Trophy className="w-6 h-6 text-primary" />,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000",
    link: "/book-turf",
  },
];