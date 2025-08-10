import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../../assets/images/logo.png';
import { Link, Element } from 'react-scroll';
import menu_icon from '../../assets/images/menu4.png'
//import close_icon from '../../assets/images/close.png'

const Navbar = () => {

    const[sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })

    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav class={`container ${sticky ? "dark-nav" : ""}`}>

            <div className='title'>
                <img src={logo} alt="" className='logo'/>
                <h1>Adventure</h1>
            </div>
            
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li>
                    <Link to='hero' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='destinations' smooth={true} offset={-100} duration={500}>Destinations</Link>
                </li>
                <li>
                    <Link to='deals' smooth={true} offset={-100} duration={500}>Deals</Link>
                </li>
                <li>
                    <Link to='blog' smooth={true} offset={-100} duration={500}>Blog</Link>
                </li>
                <li>
                    <Link to='testimonials' smooth={true} offset={-100} duration={500}>Testimonials</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link>
                </li>
            </ul>
            <img src={menu_icon} className='menu' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar