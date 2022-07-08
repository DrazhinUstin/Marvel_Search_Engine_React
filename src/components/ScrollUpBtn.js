import { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollUpBtn = () => {
    const [isBtnShowing, setIsBtnShowing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > document.documentElement.clientHeight) {
                setIsBtnShowing(true);
            } else {
                setIsBtnShowing(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`scroll-up-btn ${isBtnShowing && 'show'}`}
            onClick={() => window.scrollTo(0, 0)}
        >
            <FaAngleDoubleUp />
        </button>
    );
};

export default ScrollUpBtn;
