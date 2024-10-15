import React, { useEffect, useState } from 'react';
import '../css/Tag.css';
import '../css/mobile/TagMobile.css';

const Tag = ({ name, isSelected, onClick, isClickable, isSmall }) => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);
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
        if (isClickable) {
            return (
                <button
                    type="button"
                    className={`tag-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => onClick(name)}
                >
                    {name}
                </button>
            );
        } else {
            return (
                <span className={'tag-button-nonclick'}>
                    {name}
                </span>
            );
        }
    }

    if (isClickable) {
        return (
            <button
                type="button"
                className={`tag-button-m ${isSelected ? 'selected' : ''}`}
                onClick={() => onClick(name)}
            >
                {name}
            </button>
        );
    } else if (!isSmall) {
        return (
            <span className={'tag-button-nonclick-m'}>
                {name}
            </span>
        );
    } else {
        return (
            <span className={'tag-button-nonclick-small-m'}>
                {name}
            </span>
        );
    }
};

export default Tag;