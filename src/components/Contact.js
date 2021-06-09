import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import './Contact_Style.css'

function Contact() {
    return (
        <div>
            <Navbar/>
            <Hero text="CONTACT-US" />
            <div className="container">
                <h2 className="text-center">This is the contact us section</h2>
            </div>
        </div>
    )
}

export default Contact
