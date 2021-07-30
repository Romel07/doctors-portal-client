import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')



const AppointmentForm = ({ modalIsOpen, closeModal, bookingSubjet, selectedDate }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {        
        data.bookingSubjet = bookingSubjet;
        data.selectedDate = selectedDate;
        data.created = new Date();

        fetch("http://localhost:5000/addAppointment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(success=>{
            if (success){
                closeModal();
                alert("Appointment Created Successfully")
            }
        })
        
    };

    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div style={{ width: '700px' }}>
            <Modal
                isOpen={modalIsOpen}
                //   onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >

                <h4 className='text-center text-brand'>{bookingSubjet}</h4>
                <p className='text-center'>On {selectedDate.toDateString()}</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Your Name" {...register("Your Name", { required: true, maxLength: 100 })} />
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

                    <select {...register("Gender", { required: true })}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <input type="number" placeholder="Your Age" {...register("Your Age", { required: true})} />
                    <input type="number" placeholder="Weight" {...register("Your Weight", { required: true})} />

                    <input type="submit" />
                </form>
            </Modal>

        </div>
    );
};

export default AppointmentForm;