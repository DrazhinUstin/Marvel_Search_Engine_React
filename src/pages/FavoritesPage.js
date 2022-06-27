import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ComicsContainer } from '../components';
import { clearFavorites } from '../features/favorites/favoritesSlice';

const FavoritesPage = () => {
    const { items } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    if (!items.length) {
        return (
            <section className='section section-center'>
                <p>You don't have favorite comics yet...</p>
                <Link to='/comics' className='border-btn blue'>
                    add favorites
                </Link>
            </section>
        );
    }
    return (
        <section className='section section-center'>
            <ComicsContainer items={items} />
            <div className='btn-container' style={{ marginTop: '4rem' }}>
                <Link to='/comics' className='border-btn blue'>
                    add more
                </Link>
                <button className='border-btn' onClick={() => dispatch(clearFavorites())}>
                    clear all
                </button>
            </div>
        </section>
    );
};

export default FavoritesPage;
