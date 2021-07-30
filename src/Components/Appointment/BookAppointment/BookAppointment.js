import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({selectedDate}) => {
    const bookingData = [
        {
            id : 1,
            subjet: 'Teeth Orthodontics',
            visitingHour: '8:00 AM-9:00 AM',
            totalSapace: '10'
        },
        {
            id : 2,
            subjet: 'Cosmetic Dentistry',
            visitingHour: '10:05 AM-11:30 AM',
            totalSapace: '10'
        },
        {
            id : 3,
            subjet: 'Teeth Cleaning',
            visitingHour: '5:00 PM-6:30 PM',
            totalSapace: '10'
        },
        {
            id : 4,
            subjet: 'Cavity Protection',
            visitingHour: '7:00 AM-8:30 AM',
            totalSapace: '10'
        },
        {
            id : 5,
            subjet: 'Teeth Orthodontics',
            visitingHour: '8:00 AM-9:00 AM',
            totalSapace: '10'
        },
        {
            id : 6,
            subjet: 'Teeth Orthodontics',
            visitingHour: '8:00 AM-9:00 AM',
            totalSapace: '10'
        }
    ]
    return (
        <section>
            <h2 className='text-center text-brand mb-5 pb-2'>Available Appointment on {selectedDate.toDateString()}</h2>
            <div className="row w-75 text-center mx-auto">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} selectedDate={selectedDate} booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;