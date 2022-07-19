import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const HeroSlider = ({ data }) => {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const changeSlide = () => {
            slides[index].classList.remove('active');
            slides[index].addEventListener('transitionend', handleTransitionend);
            let newIndex = index + 1;
            if (newIndex > data.length - 1) newIndex = 0;
            setIndex(newIndex);
        };
        const handleTransitionend = (e) => {
            e.currentTarget.classList.remove('anim');
            e.currentTarget.removeEventListener('transitionend', handleTransitionend);
        };
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                clearTimeout(timerId);
            } else {
                timerId = setTimeout(changeSlide, 5000);
            }
        };
        const slides = [...sliderRef.current.querySelectorAll('img')];
        slides[index].classList.add('active', 'anim');
        let timerId = setTimeout(changeSlide, 5000);
        window.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            clearTimeout(timerId);
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [data, index]);

    return (
        <section className='hero-slider' ref={sliderRef}>
            <article className='hero-slider-intro'>
                <Logo />
                <Link to='/characters' className='transparent-btn'>
                    start search
                </Link>
            </article>
            <div className='hero-slider-substrate'></div>
            {data.map(({ id, image }) => {
                return <img key={id} src={image} alt='hero' className='hero-slider-slide' />;
            })}
        </section>
    );
};

export default HeroSlider;
