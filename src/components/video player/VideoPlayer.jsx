

import React from 'react';
import './VideoPlayer.css';
import video1 from '../../assets/videos/video1.mp4'

const VideoPlayer = () => {
    return (
        <div className='video-player hide'>
        
            <video src={video1} autoplay muted controls></video>
        
        </div>
    )
    }

export default VideoPlayer