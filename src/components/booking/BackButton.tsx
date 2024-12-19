import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-dark-light hover:text-primary transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Link>
  );
}