import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Loading,
    HeroSlider,
    FavoritesCounter,
    NoFavorites,
    ComicsContainer,
    Carousel,
    Accordion,
} from '../components';
import { images, faqData } from '../utils/localData';
import useMarvelAPI from '../utils/useMarvelAPI';

const HomePage = () => {
    const { items: favorites } = useSelector((state) => state.favorites);
    const { isLoading: firstLoading, data: comics } = useMarvelAPI(
        'comics?dateDescriptor=thisWeek'
    );
    const { isLoading: secondLoading, data: characters } = useMarvelAPI('characters');
    return (
        <>
            {(firstLoading || secondLoading) && <Loading />}
            <HeroSlider data={images} />
            <section className='section section-center'>
                <div className='section-title'>
                    <h2>Favorites</h2>
                    <FavoritesCounter />
                </div>
                {!favorites.length ? (
                    <NoFavorites />
                ) : (
                    <>
                        {favorites.length < 4 ? (
                            <ComicsContainer items={favorites} counter={false} />
                        ) : (
                            <Carousel data={favorites} />
                        )}
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <Link to='/favorites' className='border-btn'>
                                watch favorites
                            </Link>
                        </div>
                    </>
                )}
            </section>
            {comics && (
                <section className='section section-center'>
                    <div className='section-title'>
                        <h2>comics</h2>
                    </div>
                    <Carousel data={comics.results} />
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to='/comics' className='border-btn'>
                            watch comics
                        </Link>
                    </div>
                </section>
            )}
            {characters && (
                <section className='section section-center'>
                    <div className='section-title'>
                        <h2>heroes</h2>
                    </div>
                    <Carousel data={characters.results} />
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to='/characters' className='border-btn'>
                            watch heroes
                        </Link>
                    </div>
                </section>
            )}
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
