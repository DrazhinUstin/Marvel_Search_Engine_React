import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { cutString } from '../utils/helpers';

const CrumbTrail = ({ title, link }) => {
    return (
        <div className='crumb-trail section-center'>
            <Link to='/' className='crumb-trail-item'>
                <FaHome />
                home
            </Link>
            {link && (
                <Link to={link.path} className='crumb-trail-item'>
                    {link.title}
                </Link>
            )}
            <span className='crumb-trail-item'>{cutString(title, 50)}</span>
        </div>
    );
};

export default CrumbTrail;
