import { Link } from 'react-router-dom';
import image from '../assets/spider.png';

const NoFavorites = () => {
    return (
        <section className='section section-center text-center'>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                You don't have favorite comics yet...
            </p>
            <img src={image} alt='spider' style={{ width: '8rem', margin: '4rem auto' }} />
            <Link to='/comics' className='border-btn blue'>
                add favorites
            </Link>
        </section>
    );
};

export default NoFavorites;
