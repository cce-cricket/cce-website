import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import BookingForm from '../components/booking/BookingForm';
import TimeSlotPicker from '../components/booking/TimeSlotPicker';
import TurfOptions from '../components/booking/TurfOptions';
import BackButton from '../components/booking/BackButton';
import { fadeInUp } from '../constants/animations';

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedTurfOption, setSelectedTurfOption] = useState<'half' | 'full' | null>(null);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <BackButton />
        
        <motion.div
          {...fadeInUp}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-dark mb-8 text-center">
            Book Cricket Turf
          </h1>

          <div className="space-y-8">
            <TurfOptions
              selectedOption={selectedTurfOption}
              onOptionChange={setSelectedTurfOption}
            />

            <div className="grid md:grid-cols-2 gap-8">
              <TimeSlotPicker
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                selectedSlot={selectedSlot}
                onSlotChange={setSelectedSlot}
              />

              <BookingForm
                selectedDate={format(selectedDate, 'PPP')}
                selectedSlot={selectedSlot}
                selectedTurfOption={selectedTurfOption}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}