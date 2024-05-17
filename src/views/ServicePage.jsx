import React, { useState } from 'react';
import "../styles/ServicePage.css";

const ServicePage = () => {
    const numBubbles = 7;
    const circleRadius = 200; // Adjust the radius of the circle as needed
    const center = { x: 250, y: 250 }; // Adjust the center position as needed

    const [showText, setShowText] = useState(false);

    const toggleTextVisibility = () => {
        setShowText(!showText);
    };

    const generateRandomPosition = () => {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.sqrt(Math.random()) * circleRadius;
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        return { x, y };
    };

    const bubbles = Array.from({ length: numBubbles }, (_, index) => ({
        id: index + 1,
        position: generateRandomPosition(),
        label: `${index + 1}`
    }));


    return (
        <div className="service-page-container">


            <div className="service-container">
                <div className="services-text">
                    <h1>Try Popping soap bubbles to reveal our amazing services</h1>
                </div>
                <div className="bubble-container">
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>HOUSE CLEANMING</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Two - Some additional information</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Three - Some additional information</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Four - Some additional information</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Five - Some additional information</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Six - Some additional information</p>}
                    </div>
                    <div className="individual-bubble" onMouseEnter={toggleTextVisibility} onMouseLeave={toggleTextVisibility}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {showText && <p>Seven - Some additional information</p>}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServicePage;
