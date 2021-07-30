import React from 'react';
import fluride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import whitening from '../../../images/tooth.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';


const Services = () => {
    const serviceData = [
        {
            img : fluride,
            title: 'Fluride Treatment'
        },
        {
            img : cavity,
            title: 'Cavity Filling'
        },
        {
            img : whitening,
            title: 'Teeth Whitening'
        }
    ]
    return (
        <section style={{height:'420px'}}>
            <div className ='text-center my-4 pb-5'>
            <h4 style={{color: '#1CC7C1'}}>Our Services</h4>
            <h1>Service we provide</h1>
            </div>
            
            <div className='row container-height w-75 ms-auto me-auto'> 
     
            {
                serviceData.map(service =><ServicesDetail key={service.title} service={service}></ServicesDetail>)
            }
            </div>


        </section>
    );
};

export default Services;