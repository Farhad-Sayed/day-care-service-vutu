import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Header/Header';
import Reasons from '../Reasons/Reasons';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Welcome></Welcome>
            <Services></Services>
            <Testimonials></Testimonials>
            <Reasons></Reasons>
            <Footer></Footer>
        </div>
    );
};

export default Home;