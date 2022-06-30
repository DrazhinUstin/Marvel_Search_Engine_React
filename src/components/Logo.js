import { ReactComponent as LogoSvg } from '../assets/marvel_logo.svg';

const Logo = ({ title = 'search engine' }) => {
    return (
        <div className='logo'>
            <LogoSvg />
            {title}
        </div>
    );
};

export default Logo;
