import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLinks } from './';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const menu = menuRef.current;
        const menuParent = menu.parentElement;
        const menuLinks = menu.querySelectorAll('a');
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            const { y } = menuParent.getBoundingClientRect();
            menu.style.top = `${menuParent.offsetHeight + y}px`;
            if (location.pathname === '/') menu.style.top = 0;
            menuLinks.forEach((link, index) => {
                link.style.animation = `surprise 0.25s ease-in-out ${0.25 + index / 5}s forwards`;
            });
        } else {
            document.body.style.overflow = '';
            menuLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    }, [isMenuOpen, location]);

    return (
        <nav className='navbar'>
            <div className='section-center'>
                <NavLinks
                    className={`navbar-menu ${isMenuOpen && 'open'}`}
                    reference={menuRef}
                    onClick={() => setIsMenuOpen(false)}
                />
                <button
                    className={`navbar-toggle-btn ${isMenuOpen && 'active'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
