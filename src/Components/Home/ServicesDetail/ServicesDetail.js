import React from 'react';

const ServicesDetail = ({service}) => {
    return (
        <section className="col-md-4 text-center">
            <div>
                <img style={{height:'60px'}} src={service.img} alt=""/>
            </div>
            <div>
                <h5 className='my-4' >{service.title}</h5>
                <p className='text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus. </p>
            
            </div>
        </section>
    );
};

export default ServicesDetail;