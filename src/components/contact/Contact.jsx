import React, { useState } from 'react';
import './Contact.css';
import email from '../../assets/images/email3.png'
import phone from '../../assets/images/phone3.png'
import address from '../../assets/images/address3.png'
import dark_arrow from '../../assets/images/dark-arrow.png'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "83411017-089c-41fb-885f-a4d7e466824d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
    });

    const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <>
            <div className='titles' id='contact'>
                <p>CONTACT US</p>
                <h2>Get in Touch</h2>
            </div>
            <div className='contact'>
            
                <div className='contact-col'>
                    <h3>Send us a message</h3>
                    <p>🌍✨ Dreaming of sipping champagne on a private beach, exploring hidden gems off the beaten path, or indulging in a five-star city getaway, we’re here to make it happen. ✈️🏝️</p>
                    <ul>
                        <li><img src={email} alt="email" />  duncanochieng48@gmail.com</li>
                        <li><img src={phone} alt="email" />+254 705 250 517</li>
                        <li><img src={address} alt="email" />124 Cronch Street, Ocean</li>
                    </ul>
                </div>
                <div className='contact-col'>
                    <form onSubmit={onSubmit}>
                        <label>Full Name: </label>
                        <input type='text' name='name' placeholder='Name' required></input>
                        <label>Phone Number: </label>
                        <input type='tel' name='phone' placeholder='Phone Number' required></input>
                        <label>Message</label>
                        <textarea name='message' rows='6' placeholder='Enter message' required></textarea>
                        <button type='submit' className='btn dark-btn'>Submit Now <img src={dark_arrow}/></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </>
        )
}

export default Contact