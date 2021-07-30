import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    
    const handleDateCahnge = date => {
        setSelectedDate(date);
        console.log(date)
    }
            
    useEffect(()=>{
        fetch("http://localhost:5000/appointmentsByDate", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(success=> console.log(success))   
        
    },[selectedDate])
   
     
    return (
        <section>
            <div style={{backgroundColor:'#f4fdfb', height:'100%'}} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <h5 className="my-4 pb-0">Appointments:</h5>
                    <Calendar 
                    onChange={handleDateCahnge}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate key={appointments._id} appointments={appointments} ></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;