import { Link } from 'react-router-dom';
import { Logo } from './';
import characters from '../assets/characters.jpg';

const PageHeader = ({ children, title, link, image = characters, position = 'center' }) => {
    return (
        <header
            className='page-header'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
                backgroundPosition: position,
            }}
        >
            {children}
            <div className='page-header-container'>
                <Logo title={title} />
                {link && (
                    <Link to={link.path} className='border-btn blue'>
                        {link.title}
                    </Link>
                )}
            </div>
        </header>
    );
};

export default PageHeader;
