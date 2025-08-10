import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
        
            <p>&copy; 2025 Dancun Otieno. All Rights Reserved.</p>
            <img src={logo} />
            <ul>
                <a href=''><li>Terms of Service</li></a>
                <a href=''><li>Privacy Policy</li></a>
            </ul>
        
        </div>
    )
}

export default Footer