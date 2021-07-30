import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointment By Date: {appointments.length}</h1>
            {
                appointments.length?
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div ClassName='p-5'>
                    <h4 ClassName='lead text-center'>No Appointment for this date</h4>
                </div>
                
            }
        </div>
    );
};

export default AppointmentByDate;