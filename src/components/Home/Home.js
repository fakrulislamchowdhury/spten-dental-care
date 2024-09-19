import React from 'react';
import About from '../About/About';
import Banner from '../Shared/Banner/Banner';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
        </div>
    );
};

export default Home;