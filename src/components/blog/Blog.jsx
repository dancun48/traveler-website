import React from 'react';
import './Blog.css';
import travel2 from '../../assets/images/travel2.jpg'
import travel5 from '../../assets/images/travel5.jpg'
import travel15 from '../../assets/images/travel15.jpg'
import travel17 from '../../assets/images/travel17.jpg'
import travel11 from '../../assets/images/travel11.jpg'
import travel16 from '../../assets/images/travel16.jpg'
import dark_arrow from '../../assets/images/dark-arrow.png'


const Blog = () => {
    return ( 
        <>
            <div className='titles' id='blog'>
                <p>BLOG</p>
                <h2>Top Trending</h2>
            </div>
            <div className='container blogs' id='blog'>
                <div className='blog'>
                    <img src={travel2} alt="blog-1"/>
                    <h3>LIVE BAND</h3>
                    <h4>Enjoy timeless music.</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
                <div className='blog'>
                    <img src={travel5} alt="blog-1"/>
                    <h3>TRAVEL INSIDER</h3>
                    <h4>9 Exceptionsl Suites</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
                <div className='blog'>
                    <img src={travel15} alt="blog-1"/>
                    <h3>TRAVEL INSPIRATIONS</h3>
                    <h4>Pets, Wellness and More</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
                <div className='blog'>
                    <img src={travel17} alt="blog-1"/>
                    <h3>LUXURY SOLO TRAVELS</h3>
                    <h4>Green getaway experiences</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
                <div className='blog'>
                    <img src={travel11} alt="blog-1"/>
                    <h3>GOURMET SPIRIT</h3>
                    <h4>Popular with wine lovers</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
                <div className='blog'>
                    <img src={travel16} alt="blog-1"/>
                    <h3>ICONIC DESTINATIONS</h3>
                    <h4>History in the Skies</h4>
                    <p className='article'><a href='#'>Read more</a></p>
                </div>
            </div>
            <div className='button'>
                <button className='btn'><p>Explore More...</p><img src={dark_arrow}/></button>
            </div>
        </>
    )
}

export default Blog