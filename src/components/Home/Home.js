import React from 'react';
import About from '../About/About';
import Banner from '../Pages/Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;