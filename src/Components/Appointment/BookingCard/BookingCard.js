import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, selectedDate }) => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5" >
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title text-brand">{booking.subjet}</h5>
                    <p className="card-text fw-bold">{booking.visitingHour}</p>
                    <p className="card-text">{booking.totalSapace} SPACE AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-main">BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen}  closeModal={closeModal} bookingSubjet={booking.subjet} selectedDate={selectedDate}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;