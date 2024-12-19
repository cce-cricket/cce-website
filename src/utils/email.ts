export const sendBookingEmail = async (bookingData: {
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  turfOption: 'half' | 'full';
}) => {
  const { name, email, phone, date, timeSlot, turfOption } = bookingData;
  const amount = turfOption === 'half' ? '1,500' : '2,500';

  const emailBody = `
New Booking Request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time Slot: ${timeSlot}
Turf Option: ${turfOption === 'half' ? 'Half Field' : 'Full Field'}
Amount: ₹${amount}
  `.trim();

  // In a real application, you would use a backend service or email API
  // For demo purposes, we'll log the email content
  console.log('Email sent to: patlapottymaster@gmail.com');
  console.log('Email content:', emailBody);

  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};