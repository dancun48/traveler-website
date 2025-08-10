import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/images/next-icon.png';
import back_icon from '../../assets/images/back-icon.png';
import user_1 from '../../assets/images/user-1.jpg';
import user_2 from '../../assets/images/user-2.jpg';
import user_3 from '../../assets/images/user-3.jpg';
import user_4 from '../../assets/images/user-4.jpg';

const Testimonials = () => {

    const slider2 = useRef();

    let translate_x = 0;

    const slideForward = () => {

        if(translate_x > -50){
            
            translate_x -= 25;
        }
        slider2.current.style.transform = `translateX(${translate_x}%)`

        
    }
    const slideBackward = () => {

        if(translate_x < 0){
            
            translate_x += 25;
        }
        slider2.current.style.transform = `translateX(${translate_x}%)`

    }

    return (
        <>
        <div className='titles' id='testimonials'>
            <p>TESTIMONIALS</p>
            <h2>What Our Clients Say</h2>
        </div>
        <div className='testimonials'>

            <img src={next_icon} className='next-btn' onClick={slideForward}/>
            <img src={back_icon} className='back-btn' onClick={slideBackward}/>
            <div className="slider2">

            <ul ref={slider2}>
                <li>
                    <div className='slide2'>
                        <div className='user-info'>
                            <img src={user_1} alt="user-1"/>
                            <div>
                                <h3>Mr. Frog</h3>
                                <span>Advent.#23</span><br/>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Excellent service, timely delivery, and great attention to detail. A pleasure to work with—highly recommended! Excellent service, timely delivery, and great attention to detail. A pleasure to work with—highly recommended!</p>
                    </div>
                </li>
                <li>
                    <div className='slide2'>
                        <div className='user-info'>
                            <img src={user_2} alt="user-2"/>
                            <div>
                                <h3>Mr. Horse</h3>
                                <span>Advent.#62</span><br/>
                                <span>⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Excellent service, timely delivery, and great attention to detail. A pleasure to work with—highly recommended! Excellent service, timely delivery, and great attention to detail.</p>
                    </div>
                </li>
                <li>
                    <div className='slide2'>
                        <div className='user-info'>
                            <img src={user_3} alt="user-3"/>
                            <div>
                                <h3>Mr. Panda</h3>
                                <span>Advent.#37</span><br/>
                                <span>⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Excellent service, timely delivery, and great attention to detail. A pleasure to work with—highly recommended! Excellent service, timely delivery, and great attention to detail.!</p>
                    </div>
                </li>
                <li>
                    <div className='slide2'>
                        <div className='user-info'>
                            <img src={user_4} alt="user-4"/>
                            <div>
                                <h3>Mr. Eagle</h3>
                                <span>Advent.#06</span><br/>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Excellent service, timely delivery, and great attention to detail. A pleasure to work with—highly recommended! Excellent service, timely delivery, and great attention to detail.</p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </>
    )
}

export default Testimonials