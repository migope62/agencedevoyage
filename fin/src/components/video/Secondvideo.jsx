import React, { useRef, useEffect } from 'react';

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('ended', () => {
            setTimeout(() => {
                video.play();
            }, 100);
        });
    }, []);

    return (
        <video ref={videoRef} controls className="Milan"  loop autoPlay>
            <source src="Milan.mp4" type="video/mp4" />
            Votre navigateur n'est pas compatible.
        </video>
    );
};

export default Video;
