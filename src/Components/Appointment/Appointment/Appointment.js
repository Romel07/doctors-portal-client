import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateCahnge = date => {
        setSelectedDate(date);
        // console.log({selectedDate})
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateCahnge={handleDateCahnge}></AppointmentHeader>
            <BookAppointment selectedDate={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;