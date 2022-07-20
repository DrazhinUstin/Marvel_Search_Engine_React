import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/favorites/favoritesSlice';

const AddToFavoritesBtn = ({ item }) => {
    const { items: favorites } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            {!favorites.find((i) => i.id === item.id) ? (
                <button className='border-btn blue' onClick={() => dispatch(addItem(item))}>
                    add to favorites
                </button>
            ) : (
                <button className='border-btn' onClick={() => dispatch(removeItem(item.id))}>
                    remove from favorites
                </button>
            )}
        </div>
    );
};

export default AddToFavoritesBtn;
