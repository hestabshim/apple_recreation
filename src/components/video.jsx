import React, { useState, useEffect } from 'react';
import medium_2x from "../assets/medium_2x.mp4";
import styles from '../styles/video.module.css';

const Video = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = Math.max(0.85, 1 - scrollPosition / 2000);
  const opacity = Math.max(0.85, 1 - scrollPosition / 1600);
  
  return (
    <div className={styles.videoWrapper}>
      <div 
        className={styles.videoContainer}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity
        }}
      >
        <video 
          src={medium_2x} 
          autoPlay 
          muted 
          loop 
          playsInline
        />
      </div>
    </div>
  );
};

export default Video;