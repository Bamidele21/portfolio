import React from 'react';
import "./contact.css"
import Contactform from '../components/contact-form';

function Contact () {
    return (
        <div className="contact-container">
            <h1>Contact </h1>
            <p>Feel free to email me at bambamogunseye@gmail.com or fill out the form below</p>
            <div className="contact-form">
                <Contactform />

            </div>
            
        </div>
    )
}

export default Contact;