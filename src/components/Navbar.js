import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='section-center'>
                <div className='navbar-menu'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : null)}>
                        home
                    </NavLink>
                    <NavLink
                        to='characters'
                        className={({ isActive }) => (isActive ? 'active' : null)}
                    >
                        heroes
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
