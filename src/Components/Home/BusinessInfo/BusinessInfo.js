import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../InfoCard/InfoCard.css'

const BusinessInfo = () => {
    const infosData = [
        {
            title : 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            icon : <FontAwesomeIcon icon={faClock} />,
            background : 'primary'
        },
        {
            title : 'Contact Us',
            description: 'Brooklin, NY, United State',
            icon : <FontAwesomeIcon icon={faMapMarker} />,
            background : 'dark'
        },
        {
            title : 'Visit Our Location',
            description: '+000 123 456789',
            icon : <FontAwesomeIcon icon={faPhone} />,
            background : 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center ">
            <div className='row container-height w-75'>    
            {
                infosData.map(info=> <InfoCard key={info.title} info={info}></InfoCard>)
            }
            </div>
        </section>
 
        
    );
};

export default BusinessInfo;