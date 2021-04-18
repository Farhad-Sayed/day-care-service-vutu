import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Shared/Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Header;