import { NavLink } from 'react-router-dom';
import { navLinks } from '../utils/localData';
import { FavoritesCounter } from './';

const NavLinks = ({ className, reference, onClick }) => {
    return (
        <ul className={className} ref={reference}>
            {navLinks.map(({ id, title, path }) => {
                return (
                    <li key={id}>
                        <NavLink
                            to={path}
                            className={({ isActive }) => (isActive ? 'active' : null)}
                            onClick={onClick}
                            end
                        >
                            {title}
                            {title === 'favorites' && <FavoritesCounter />}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
