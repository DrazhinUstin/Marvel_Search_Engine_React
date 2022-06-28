import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../utils/localData';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { items } = useSelector((state) => state.favorites);
    const menuRef = useRef(null);

    useEffect(() => {
        const menu = menuRef.current;
        const menuParent = menu.parentElement;
        const menuLinks = menu.querySelectorAll('a');
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            const { y } = menuParent.getBoundingClientRect();
            menu.style.top = `${menuParent.offsetHeight + y}px`;
            menuLinks.forEach((link, index) => {
                link.style.animation = `surprise 0.25s ease-in-out ${0.25 + index / 5}s forwards`;
            });
        } else {
            document.body.style.overflow = '';
            menuLinks.forEach((link) => {
                link.style.animation = '';
            });
        }
    }, [isMenuOpen]);

    return (
        <nav className='navbar'>
            <div className='section-center'>
                <div className={`navbar-menu ${isMenuOpen && 'open'}`} ref={menuRef}>
                    {navLinks.map(({ id, title, path }) => {
                        return (
                            <NavLink
                                key={id}
                                to={path}
                                className={({ isActive }) => (isActive ? 'active' : null)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {title}
                                {title === 'favorites' && <span>{items.length}</span>}
                            </NavLink>
                        );
                    })}
                </div>
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
