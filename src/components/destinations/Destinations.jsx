import React from 'react';
import './Destinations.css';
import nairobi from '../../assets/images/travel10.jpg';
import beijing from '../../assets/images/travel3.jpg';
import kampala from '../../assets/images/travel9.jpg';
import zanzibar from '../../assets/images/travel7.jpg';
import algiers from '../../assets/images/travel13.jpg';

const Destinations = () => {

    return (
        <>
            <div className='titles' id='destinations'>
                <p>DESTINATIONS</p>
                <h2>Popular Destinations</h2>
            </div>
            <div className='destinations'>
                
            
                <div className='destination'>
                    <img src={nairobi} alt='nairobi-destination'/>
                    <div className='caption'>
                        <h3>NAIROBI</h3>
                    </div>
                </div>
                <div className='destination'>
                    <img src={beijing} alt='beijing-destination'/>
                    <div className='caption'>
                        <h3>BEIJING</h3>
                    </div>
                </div>
                <div className='destination'>
                    <img src={kampala} alt='nkampala-destination'/>
                    <div className='caption'>
                        <h3>KAMPALA</h3>
                    </div>
                </div>
                <div className='destination'>
                    <img src={zanzibar} alt='zanzibar-destination'/>
                    <div className='caption'>
                        <h3>ZANZIBAR</h3>
                    </div>
                </div>
                <div className='destination'>
                    <img src={algiers} alt='algiers-destination'/>
                    <div className='caption'>
                        <h3>ALGIERS</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinations