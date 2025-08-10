
import React, { useEffect, useState } from 'react';
import './Deals.css';
import deals1 from '../../assets/images/deals1.jpg';
import deals2 from '../../assets/images/deals2.jpg';
import deals3 from '../../assets/images/deals3.jpg';
import deals4 from '../../assets/images/deals4.jpg';
import deals5 from '../../assets/images/deals5.jpg';
import deals6 from '../../assets/images/deals6.jpg';
import deals7 from '../../assets/images/deals7.jpg';

const deals = [
    { image: deals1, title: "Cape Town", duration: "3 Days, 2 Nights", offer: "Summer Deal", price: "from $300" },
    { image: deals2, title: "Nairobi", duration: "4 Days, 3 Nights", offer: "Safari Special", price: "from $400" },
    { image: deals3, title: "Zanzibar", duration: "5 Days, 4 Nights", offer: "Beach Escape", price: "from $350" },
    { image: deals4, title: "Cairo", duration: "2 Days, 1 Night", offer: "Historic Tour", price: "from $250" },
    { image: deals5, title: "Marrakech", duration: "3 Days, 2 Nights", offer: "Cultural Experience", price: "from $320" },
    { image: deals6, title: "Victoria Falls", duration: "4 Days, 3 Nights", offer: "Adventure Trip", price: "from $450" },
    { image: deals7, title: "Addis Ababa", duration: "2 Days, 1 Night", offer: "City Break", price: "from $200" }
];


const Deals = () => {

    let [VISIBLE_COUNT, setVisibleCount] = useState(4);


    useEffect(() => {

        window.addEventListener('resize', () => {
            window.innerWidth <= 840 ? setVisibleCount(1) : setVisibleCount(4);
        })
        
    }, [])
    
    const [start, setStart] = useState(0);

    const prevSlide = () => setStart((prev) => (prev - 1 + deals.length) % deals.length);
    const nextSlide = () => setStart((prev) => (prev + 1) % deals.length);

    // Get the 4 visible deals, wrapping around if needed
    const visibleDeals = Array(VISIBLE_COUNT)
        .fill(0)
        .map((_, i) => deals[(start + i) % deals.length]);



    return (
        <>
        <div className='titles' id='deals'>
                <p>DEALS</p>
                <h2>Hot Deals Under $500</h2>
            </div>
        <div className="deals deals-slider">
        <button className="slider-btn left" onClick={prevSlide}>&lt;</button>
            <div className="deals-row">
                {visibleDeals.map((deal, idx) => (
                <div className="deal" key={idx}>
                    <img src={deal.image} alt={deal.title} />
                    <h3>{deal.title}</h3>
                    <p>{deal.duration}</p>
                    <p>{deal.offer}</p>
                    <h4>{deal.price}</h4>
                </div>
                ))}
            </div>
        <button className="slider-btn right" onClick={nextSlide}>&gt;</button>
        </div>
        </>
    );
};

export default Deals;