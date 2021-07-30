import React from 'react';
import chair from '../../../images/chair.png';
import '../Header/Header.css'

const HeaderMain = () => {
    return (

            <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1" >
                <h1 style={{color:" #3A4256"}}>Your New Smile <br/> Start Here</h1>
                <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus nemo totam. Tempora, porro aut!</p>
                <button className="btn btn-main">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6" > 
                <img src={chair} alt="" className="img-fluid" /> 
            </div>
        </main>

    );
};

export default HeaderMain;