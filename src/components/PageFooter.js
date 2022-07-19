import { NavLink } from 'react-router-dom';
import { Logo, FavoritesCounter } from './';
import { navLinks } from '../utils/localData';
import { FaGithub } from 'react-icons/fa';

const PageFooter = () => {
    return (
        <footer className='page-footer'>
            <div className='section section-center'>
                <div className='page-footer-container'>
                    <Logo />
                    <ul className='page-footer-links'>
                        {navLinks.map(({ id, title, path }) => {
                            return (
                                <li key={id}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) => (isActive ? 'active' : null)}
                                        end
                                    >
                                        {title}
                                        {title === 'favorites' && <FavoritesCounter />}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='page-footer-underline'></div>
                <div className='btn-container'>
                    <a
                        href='https://github.com/DrazhinUstin/Marvel_Search_Engine_React'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn flex gray'
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>
                <p>
                    © {new Date().getFullYear()} Marvel Search Engine
                    <br />
                    All rights are reserved <br />
                    Data provided by{' '}
                    <a
                        href='https://developer.marvel.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-link'
                    >
                        MARVEL
                    </a>
                    . © {new Date().getFullYear()} MARVEL
                </p>
            </div>
        </footer>
    );
};

export default PageFooter;
