import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Tetimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>  
            <MakeAppointment></MakeAppointment>   
            <Testimonials></Testimonials>  
            <Blogs></Blogs>    
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;