import React from 'react';
import Product from './Product.js';
import amazonBanner from './amazon-banner-en.jpg';
import leanStartup from './lean-startup.jpg';
import irobot from './irobot.jpg';
import casio from './casio.jpg';
import gucci from './gucci.jpg';
import bose from './bose.jpg';
import fjallraven from './fjallraven.png';

import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src={amazonBanner}
                alt="Amazon Banner" 
            />
             {/* Product is, title, price, rating, image */}
             <div className="home__row">
                <Product 
                    id="123124"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"    
                    price={11.96}
                    rating={5}
                    image={leanStartup}
                />
                <Product 
                    id="123124"
                    title="iRobot Roomba 675 Robot Vacuum-Wi-Fi Connectivity, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"    
                    price={181.58}
                    rating={5}
                    image={irobot}
                />
             </div>
             <div className="home__row">
                <Product 
                        id="123124"
                        title="Casio Men's 'G-Shock' Quartz Resin Sport Watch"    
                        price={53.90}
                        rating={5}
                        image={casio}
                    />
                <Product 
                    id="123124"
                    title="Coach New York Parfum"    
                    price={57.00}
                    rating={5}
                    image={gucci}
                />
                <Product 
                    id="123124"
                    title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"    
                    price={299.00}
                    rating={5}
                    image={bose}
                />
             </div>
             <div className="home__row">
                <Product 
                    id="123124"
                    title="Fjallraven, Kanken Classic Backpack for Everyday"    
                    price={78.99}
                    rating={5}
                    image={fjallraven}
                />
             </div>
             {/* Product */}
        </div>
    );
}
