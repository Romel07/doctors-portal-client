import React from 'react';
import maskGroup3 from '../../../images/Mask Group 3.png';


const ExceptionalDental = () => {
    return (
       <div style={{height:'700px' }}  className='row w-75  mx-auto'>
           <div className='col-md-6'>
               <img className='img-fluid' style={{ maxWidth: '100%', objectFit:'cover' }} src={maskGroup3} alt=""/>
           </div>
           <div className='col-md-6 ps-5'>
               <h1 className='my-5 '>Exceptional Dental <br/> Care, on Your Teeth</h1>
               <p className='text-secondary mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia eum, nihil voluptatum cupiditate tenetur cum. Dolor officia delectus pariatur nesciunt officiis facere culpa quasi rem natus doloremque! Enim asperiores nihil nisi ex sint molestiae vel sed fuga dicta modi, qui pariatur magni, nostrum itaque, eum corrupti beatae quae labore debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit amet? Laborum praesentium velit nihil. </p>
               <button className="btn btn-main mt-4">LEARN MORE</button>
           </div>
           
       </div>
    );
};

export default ExceptionalDental;