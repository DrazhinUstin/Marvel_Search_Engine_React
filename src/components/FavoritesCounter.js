import { useSelector } from 'react-redux';

const FavoritesCounter = () => {
    const { items } = useSelector((state) => state.favorites);
    return <span className='favorites-counter'>{items.length}</span>;
};

export default FavoritesCounter;
