import React from 'react';
import amazonBanner from './amazon-banner-en.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src={amazonBanner}
                alt="Amazon Banner" 
            />
        </div>
    )
}
