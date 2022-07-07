import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ data }) => {
    const [step, setStep] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [xDiff, setXDiff] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [slidesOnScreen, setSlidesOnScreen] = useState(3);
    const carouselRef = useRef(null);

    useEffect(() => {
        const init = () => {
            setSlidesOnScreen(
                Math.round(
                    carouselRef.current.offsetWidth / carouselRef.current.children[0].offsetWidth
                )
            );
            switchSlide();
        };
        init();
        window.addEventListener('resize', init);
        return () => window.removeEventListener('resize', init);
    }, [step, slidesOnScreen]);

    const switchSlide = () => {
        if (step > data.length - slidesOnScreen) {
            setStep(0);
            return;
        }
        if (step < 0) {
            setStep(data.length - slidesOnScreen);
            return;
        }
        const slideWidth = carouselRef.current.children[0].offsetWidth;
        const translate = -step * slideWidth;
        setCurrentTranslate(translate);
        displayTranslate(translate);
    };

    const displayTranslate = (translate) => {
        carouselRef.current.style.transform = `translateX(${translate}px)`;
    };

    const getClientX = (e) => e.clientX || e.touches[0].clientX;

    const startSwipe = (e) => {
        setIsDragging(true);
        setStartX(getClientX(e));
    };

    const moveSwipe = (e) => {
        if (!isDragging) return;
        const currentX = getClientX(e);
        setXDiff(currentX - startX);
        displayTranslate(currentTranslate + currentX - startX);
    };

    const endSwipe = () => {
        if (!isDragging) return;
        if (xDiff < -100) setStep(step + 1);
        if (xDiff > 100) setStep(step - 1);
        else switchSlide();
        setIsDragging(false);
        setXDiff(0);
        setStartX(0);
    };

    return (
        <>
            <div className='carousel'>
                <div
                    className='carousel-slides'
                    ref={carouselRef}
                    onMouseDown={startSwipe}
                    onMouseMove={moveSwipe}
                    onMouseUp={endSwipe}
                    onMouseLeave={endSwipe}
                    onTouchStart={startSwipe}
                    onTouchMove={moveSwipe}
                    onTouchEnd={endSwipe}
                    onDragStart={(e) => e.preventDefault()}
                >
                    {data.map(({ id, name, title, thumbnail: { path, extension } }) => {
                        return (
                            <article key={id}>
                                <img src={`${path}.${extension}`} alt={name || title} />
                                <footer>
                                    <Link to={`/${name ? 'characters' : 'comics'}/${id}`}>
                                        {name ? name : 'WATCH'}
                                    </Link>
                                </footer>
                            </article>
                        );
                    })}
                </div>
                <button className='carousel-control-btn' onClick={() => setStep(step - 1)}>
                    <FaChevronLeft />
                </button>
                <button className='carousel-control-btn' onClick={() => setStep(step + 1)}>
                    <FaChevronRight />
                </button>
            </div>
            <div className='carousel-stages'>
                {data.slice(slidesOnScreen - 1).map((_, index) => {
                    return (
                        <button
                            key={index}
                            className={index === step ? 'active' : null}
                            onClick={() => setStep(index)}
                        ></button>
                    );
                })}
            </div>
        </>
    );
};

export default Carousel;
