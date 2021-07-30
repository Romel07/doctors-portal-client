import React from 'react';

const AppointmentShortList = ({appointments}) => {
    console.log(appointments);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Booking</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.selectedDate}</td>
                        <td>{appointment.bookingSubjet}</td>
                        <td>{appointment.Email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;