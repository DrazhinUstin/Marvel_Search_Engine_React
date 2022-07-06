import { useSelector } from 'react-redux';
import { HeroSlider, FavoritesCounter, NoFavorites, Carousel, Accordion } from '../components';
import { images, faqData } from '../utils/localData';

const HomePage = () => {
    const { items: favorites } = useSelector((state) => state.favorites);
    return (
        <>
            <HeroSlider data={images} />
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>Favorites</h2>
                    <FavoritesCounter />
                </div>
                {!favorites.length ? <NoFavorites /> : <Carousel data={favorites} />}
            </section>
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>FAQ</h2>
                </div>
                <Accordion data={faqData} />
            </section>
        </>
    );
};

export default HomePage;
