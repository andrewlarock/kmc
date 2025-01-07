import React, { useEffect, useState } from 'react';
import '../css/Chart.css';

const Chart = ({ score }) => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);
    
    const radius = 40; // Radius of the circle
    const circumference = Math.PI * radius; // Full circumference for half-circle

    // Proportion of the circle that should be filled based on the score
    const strokeValue = (score / 10) * circumference;

    useEffect(() => {
        // Event listener to detect screen resizing
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 475); // Update state based on screen size
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    if (isDesktop) {
        return (
            <svg viewBox="0 0 100 50" className="gauge">
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50" // Arc path for the half-circle background
                    fill="none"
                    stroke="#d2ddd7" // green background for the arc
                    strokeWidth="19"
                />
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50" // Arc path for the green fill
                    fill="none"
                    stroke="#4b9793" // blue fill
                    strokeWidth="19"
                    strokeDasharray={`${strokeValue} ${circumference}`} // Adjust strokeDasharray to fill based on score
                />
                <text
                    x="52" // Position horizontally
                    y="45" // Position vertically
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                    fill="#36454F"
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="750"
                >
                    {score}<tspan fontSize="5" fontWeight="450" dy="0.4em">/10</tspan>
                </text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 100 50" className="gauge-m">
            <path
                d="M 10 50 A 40 40 0 0 1 90 50" // Arc path for the half-circle background
                fill="none"
                stroke="#d2ddd7" // green background for the arc
                strokeWidth="19"
            />
            <path
                d="M 10 50 A 40 40 0 0 1 90 50" // Arc path for the green fill
                fill="none"
                stroke="#4b9793" // blue fill
                strokeWidth="19"
                strokeDasharray={`${strokeValue} ${circumference}`} // Adjust strokeDasharray to fill based on score
            />
            <text
                x="52" // Position horizontally
                y="44.5" // Position vertically
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="18"
                fill="#36454F"
                fontFamily="Montserrat, sans-serif"
                fontWeight="750"
            >
                {score}<tspan fontSize="5" fontWeight="450" dy="0.4em">/10</tspan>
            </text>
        </svg>
    );

};

export default Chart;