import React from 'react';
import video from '../videos/video.mp4';

const Background = () => {
    return ( 
        <div className="background-video">
            <video autoPlay loop muted >
                <source src={video} type="video/mp4" />
            </video>
        </div>
     );
}
 
export default Background;