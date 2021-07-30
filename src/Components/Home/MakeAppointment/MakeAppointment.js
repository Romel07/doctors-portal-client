import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        // <section>
            <div className="make-appointment   mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <img src={doctor} alt=""/>
                        </div>
                        <div style={{zIndex:'5'}} className="col-md-7 text-white mt-5">
                            <h4 style={{color:'#1CC7C1'}}>APPOINTMENT</h4>
                            <h1 className="my-4">Make an Appointment <br/> Today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus vitae optio pariatur modi reprehenderit sit?</p>
                            <button className="btn btn-main mt-5">LEARN MORE</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        // </section>
    );
};

export default MakeAppointment;