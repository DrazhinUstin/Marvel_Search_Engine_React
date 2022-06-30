import { Link } from 'react-router-dom';
import { Logo, FavoritesCounter } from './';
import { navLinks } from '../utils/localData';

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
                                    <Link to={path}>
                                        {title}
                                        {title === 'favorites' && <FavoritesCounter />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='page-footer-underline'></div>
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
