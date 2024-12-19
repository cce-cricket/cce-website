import React from 'react';
import { format, addDays } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TimeSlotPickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  selectedSlot: string;
  onSlotChange: (slot: string) => void;
}

const timeSlots = [
  '06:00 AM - 07:30 AM',
  '07:30 AM - 09:00 AM',
  '09:00 AM - 10:30 AM',
  '04:00 PM - 05:30 PM',
  '05:30 PM - 07:00 PM',
  '07:00 PM - 08:30 PM',
];

export default function TimeSlotPicker({
  selectedDate,
  onDateChange,
  selectedSlot,
  onSlotChange,
}: TimeSlotPickerProps) {
  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-dark mb-4">Select Date & Time</h3>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => onDateChange(date)}
              className={cn(
                "flex-shrink-0 p-3 rounded-lg border transition-colors",
                selectedDate.toDateString() === date.toDateString()
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-200 hover:border-primary/50"
              )}
            >
              <p className="text-sm font-medium">{format(date, 'EEE')}</p>
              <p className="text-2xl font-bold">{format(date, 'd')}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-dark">Available Time Slots</h4>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => onSlotChange(slot)}
              className={cn(
                "p-3 text-sm rounded-lg border transition-colors",
                selectedSlot === slot
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-200 hover:border-primary/50"
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}