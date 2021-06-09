import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Products from './Products';
import './Services_Style.css';

function Services() {
    return (
        <div>
            <Navbar/>
            <Hero text="OUR PRODUCTS"/>
            <h1 className="h2 text-center head">Checkout Our Wide Range Of Products</h1>
            <Products/>
        </div>
    )
}

export default Services
