import { useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { getElemHeight } from '../utils/helpers';

const Accordion = ({ data }) => {
    const accordionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            [...accordionRef.current.children].forEach((elem) => {
                if (!elem.classList.contains('active')) return;
                elem.lastElementChild.style.height = getElemHeight(elem.lastElementChild);
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (e) => {
        const target = e.target.closest('.accordion-item-header');
        if (!target) return;
        const sibling = target.nextElementSibling;
        const parent = target.parentElement;
        if (!parent.classList.contains('active')) {
            parent.classList.add('active');
            sibling.style.height = getElemHeight(sibling);
        } else {
            parent.classList.remove('active');
            sibling.style.height = '';
        }
        [...e.currentTarget.children].forEach((elem) => {
            if (elem === parent) return;
            elem.classList.remove('active');
            elem.lastElementChild.style.height = '';
        });
    };

    return (
        <ul className='accordion' onClick={handleClick} ref={accordionRef}>
            {data.map(({ title, article }, index) => {
                return (
                    <li key={index} className='accordion-item'>
                        <header className='accordion-item-header'>
                            <p>{title}</p>
                            <FaChevronDown />
                        </header>
                        <div className='accordion-item-content'>
                            <article dangerouslySetInnerHTML={{ __html: article }} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Accordion;
