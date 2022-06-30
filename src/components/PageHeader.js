import { ReactComponent as LogoSvg } from '../assets/marvel_logo.svg';
import characters from '../assets/characters.jpg';

const PageHeader = ({ children, title, image = characters, position = 'center' }) => {
    return (
        <header
            className='page-header'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
                backgroundPosition: position,
            }}
        >
            {children}
            <div className='logo'>
                <LogoSvg />
                {title}
            </div>
        </header>
    );
};

export default PageHeader;
