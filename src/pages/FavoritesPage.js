import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHeader, NoFavorites, CrumbTrail, ComicsContainer } from '../components';
import { removeItem, clearFavorites } from '../features/favorites/favoritesSlice';
import image from '../assets/spider.jpg';

const FavoritesPage = () => {
    const { items } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <>
            <PageHeader title='favorites' image={image}>
                <CrumbTrail title='favorites' />
            </PageHeader>
            <section className='section section-center'>
                {!items.length ? (
                    <NoFavorites />
                ) : (
                    <>
                        <ComicsContainer items={items} func={(id) => dispatch(removeItem(id))} />
                        <div className='btn-container' style={{ marginTop: '4rem' }}>
                            <Link to='/comics' className='border-btn blue'>
                                add more
                            </Link>
                            <button
                                className='border-btn'
                                onClick={() => dispatch(clearFavorites())}
                            >
                                clear all
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default FavoritesPage;
