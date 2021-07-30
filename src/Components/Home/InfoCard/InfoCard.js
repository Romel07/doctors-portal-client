import React from 'react';
import './InfoCard.css'

const InfoCard = ({info}) => {
    return (


        <div className={`col-md-4 d-flex text-light justify-content-center align-items-center bacground-${info.background} p-3`}> 
                  
                <div className="icon-info me-4">{info.icon}</div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>              
        </div>


    );
};

export default InfoCard;