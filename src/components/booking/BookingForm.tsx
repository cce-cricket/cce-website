import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import Button from '../ui/Button';
import { sendBookingEmail } from '../../utils/email';

interface BookingFormProps {
  selectedDate: string;
  selectedSlot: string;
  selectedTurfOption: 'half' | 'full' | null;
}

export default function BookingForm({ 
  selectedDate, 
  selectedSlot,
  selectedTurfOption 
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTurfOption) return;

    setIsSubmitting(true);
    try {
      await sendBookingEmail({
        ...formData,
        date: selectedDate,
        timeSlot: selectedSlot,
        turfOption: selectedTurfOption,
      });
      alert('Booking submitted successfully! We will contact you shortly.');
    } catch (error) {
      alert('Failed to submit booking. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const amount = selectedTurfOption === 'half' ? '1,500' : '2,500';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-dark mb-4">Your Details</h3>
        
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-dark mb-2">Booking Summary</h4>
        <div className="space-y-1 text-dark-light">
          <p>Date: {selectedDate}</p>
          <p>Time Slot: {selectedSlot}</p>
          {selectedTurfOption && (
            <>
              <p>Turf Option: {selectedTurfOption === 'half' ? 'Half Field' : 'Full Field'}</p>
              <p className="font-semibold text-primary">Amount: ₹{amount}</p>
            </>
          )}
        </div>
      </div>

      <motion.div whileTap={{ scale: 0.98 }}>
        <Button
          type="submit"
          className="w-full"
          disabled={!selectedSlot || !selectedTurfOption || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
        </Button>
      </motion.div>
    </form>
  );
}