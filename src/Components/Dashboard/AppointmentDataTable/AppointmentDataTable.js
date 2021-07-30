import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Subject</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Created Date</th>
                <th className="text-secondary" scope="col">Selected Date</th>
                {/* <th className="text-secondary" scope="col">Phone</th> */}
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.bookingSubjet}</td>
                        <td>{appointment.Gender}</td>
                        <td>{appointment.created}</td>
                        <td>{appointment.selectedDate}</td>
                        {/* <td>{appointment.phone}</td> */}
                        <td>{appointment.Email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentDataTable;